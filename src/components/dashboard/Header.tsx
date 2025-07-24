'use client';
import {
  Bell,
  CloudSun,
  Menu,
  Mountain,
  Search,
  Mail,
  Briefcase,
  Users,
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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from './ThemeToggle';
import { user } from '@/lib/data';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';

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
  const [currentDate, setCurrentDate] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const [notification, setNotification] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
    setNotification(notifications[Math.floor(Math.random() * notifications.length)]);

    const hours = date.getHours();
    if (hours < 12) {
      setGreeting(`Good Morning, ${user.name}!`);
    } else if (hours < 18) {
      setGreeting(`Good Afternoon, ${user.name}!`);
    } else {
      setGreeting(`Good Evening, ${user.name}!`);
    }
  }, []);

  const handleNotificationClick = () => {
    setHasNotification(false);
  };

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Mountain className="h-6 w-6" />
            <span className="font-bold">NexWork</span>
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Mountain className="h-6 w-6" />
                <span className="sr-only">NexWork</span>
              </a>
              {/* Mobile nav links can go here if needed */}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
            <div className="hidden md:block">
              <h2 className="text-lg font-semibold">{greeting}</h2>
              <p className="text-sm text-muted-foreground">{currentDate}</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-muted-foreground">
            <CloudSun className="h-5 w-5" />
            <div className="flex flex-col">
              <span>72°F Sunny</span>
              <span className="text-xs">It’s sunny today — perfect for a quick walk!</span>
            </div>
          </div>
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full relative" onClick={handleNotificationClick}>
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
                  <AvatarImage src={user.avatar} alt={`@${user.name}`} data-ai-hint="user profile" />
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
                <AvatarImage src={user.avatar} alt={`@${user.name}`} data-ai-hint="user profile" />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-2xl font-bold">{user.name}</p>
                <p className="text-md text-muted-foreground">{user.department}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{user.role}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Team: {user.team}</span>
                </div>
                 <div className="flex items-center gap-2 sm:col-span-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${user.email}`} className="text-primary hover:underline">{user.email}</a>
                </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
