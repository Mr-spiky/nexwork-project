
'use client';
import {
  Bell,
  Mountain,
  Search,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ThemeToggle } from './ThemeToggle';
import { user } from '@/lib/data';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const notifications = [
    "You have a new message from a colleague.",
    "Reminder: Team meeting at 2 PM.",
    "Your expense report has been approved.",
    "Company-wide announcement: New policy update.",
    "Your IT support ticket has been resolved.",
    "Your PTO request for next month has been approved.",
    "Don't forget to complete your mandatory compliance training.",
    "A new blog post is up on the company's tech blog.",
    "Happy work anniversary!",
    "The weekly newsletter is now available."
];

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [notification, setNotification] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setNotification(notifications[Math.floor(Math.random() * notifications.length)]);
    setCurrentDate(format(new Date(), 'EEEE, MMMM d, yyyy'));
  }, []);

  const handleNotificationClick = () => {
    setHasNotification(false);
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold text-foreground"
            >
              <Mountain className="h-6 w-6" />
              <span className="sr-only sm:not-sr-only">NexWork</span>
          </a>
          <div className="flex flex-col items-start">
              <h1 className="text-base font-bold text-foreground whitespace-nowrap">Good Morning, Alex!</h1>
              <p className="text-xs text-muted-foreground whitespace-nowrap">{currentDate}</p>
          </div>
        </div>

        <div className="flex flex-1 items-center gap-4 md:ml-auto justify-end">
          <form className="flex-initial ml-auto hidden sm:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[200px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative rounded-full" onClick={handleNotificationClick}>
                <Bell className="h-5 w-5" />
                {hasNotification && (
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                )}
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex flex-col items-start gap-2 whitespace-normal">
                <p className="font-medium">New Notification</p>
                <p className="text-sm text-muted-foreground">{notification}</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={`@${user.name}`} data-ai-hint="woman smiling" />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setIsProfileOpen(true)}>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Profile Details</DialogTitle>
            <DialogDescription>Your personal and professional information.</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex items-center gap-4 py-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} alt={`@${user.name}`} data-ai-hint="woman smiling" />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-2xl font-bold">{user.name}</p>
                <p className="text-md text-muted-foreground">{user.department}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Role:</span>
                    <span>{user.role}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Team:</span>
                    <span>{user.team}</span>
                </div>
                 <div className="flex items-center gap-2 sm:col-span-2">
                    <span className="font-semibold">Email:</span>
                    <a href={`mailto:${user.email}`} className="text-primary hover:underline">{user.email}</a>
                </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
