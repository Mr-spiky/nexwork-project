import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quickLinks } from '@/lib/data';
import { Link } from 'lucide-react';

export function QuickLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Quick Links
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {quickLinks.map((link) => (
          <Button
            key={link.id}
            variant="outline"
            className="flex flex-col h-20 sm:h-24 justify-center items-center gap-1"
            asChild
          >
            <a href={link.href}>
              <link.icon className="h-6 w-6 text-primary" />
              <span className="text-xs sm:text-sm text-center">{link.label}</span>
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
