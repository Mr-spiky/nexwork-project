'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { user } from '@/lib/data';
import { generateChatResponse } from '@/ai/flows/chat-flow';
import { cn } from '@/lib/utils';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
        // Initial greeting
        setMessages([{ text: `Hey ${user.name}, how can I help you today?`, sender: 'ai' }]);
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateChatResponse({ query: input });
      const aiMessage: Message = { text: response.reply, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Failed to get AI response:", error);
      const errorMessage: Message = { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
         <AnimatePresence>
            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-1 right-16 mb-2 mr-2 bg-background p-3 rounded-lg shadow-lg border text-sm"
                >
                   Hey {user.name}, how can I help you today?
                </motion.div>
            )}
        </AnimatePresence>
        <Button
          onClick={toggleOpen}
          className="rounded-full w-14 h-14 shadow-lg flex items-center justify-center"
        >
          {isOpen ? <X /> : <MessageSquare />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <Card className="w-[350px] h-[500px] flex flex-col shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bot />
                  AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full p-6" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={cn(
                          'flex items-end gap-2',
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.sender === 'ai' && (
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>AI</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={cn(
                            'rounded-lg px-3 py-2 max-w-[80%]',
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          )}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                         {message.sender === 'user' && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} data-ai-hint="user profile" />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}
                     {isLoading && (
                        <div className="flex items-end gap-2 justify-start">
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                            <div className="rounded-lg px-3 py-2 bg-muted">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse delay-0"></span>
                                    <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse delay-150"></span>
                                    <span className="h-2 w-2 rounded-full bg-slate-400 animate-pulse delay-300"></span>
                                </div>
                            </div>
                        </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex w-full items-center space-x-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
