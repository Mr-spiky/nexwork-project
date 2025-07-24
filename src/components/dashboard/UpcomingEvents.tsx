import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { upcomingEvents } from '@/lib/data';
import { PartyPopper } from 'lucide-react';

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PartyPopper className="h-5 w-5" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <li key={event.id}>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <h4 className="font-semibold">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {event.description}
              </p>
              {index < upcomingEvents.length - 1 && <Separator className="mt-4" />}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
