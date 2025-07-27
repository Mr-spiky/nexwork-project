
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { user } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble + Button */}
      {!isOpen && (
          <Button
            onClick={toggleChat}
            className="rounded-full w-16 h-16 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            size="icon"
            aria-label="Open chat"
          >
            <MessageSquare className="h-8 w-8" />
          </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="w-[350px] h-[500px] flex flex-col shadow-2xl rounded-2xl">
              <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground rounded-t-2xl p-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="AI Assistant" data-ai-hint="bot avatar" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  Alex – AI Assistant
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={toggleChat} className="text-primary-foreground hover:bg-black/20 h-8 w-8 rounded-full">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </CardHeader>
              <CardContent className="flex-1 p-4 space-y-4 overflow-y-auto">
                {/* Dummy Messages */}
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="AI Assistant" data-ai-hint="bot avatar" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3 text-sm max-w-[80%]">
                    <p>Hello! I'm your AI assistant. How can I assist you with company policies or finding documents?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 text-sm max-w-[80%]">
                    <p>Can you show me the latest all-hands recording?</p>
                  </div>
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src={user.avatar} alt={`@${user.name}`} data-ai-hint="woman smiling" />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="AI Assistant" data-ai-hint="bot avatar" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3 text-sm max-w-[80%]">
                    <p>Of course! You can find all company recordings in the "Quick Links" section under "Training Materials".</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <Input
                  placeholder="Type your message..."
                  className="w-full"
                  disabled
                />
              </CardFooter>
            </Card>
        </motion.div>
      )}
    </div>
  );
}
