import { Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6" />
          <span className="font-semibold">NexWork Inc. © {new Date().getFullYear()}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Made with care for our team.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary">
            Privacy
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            Terms
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
