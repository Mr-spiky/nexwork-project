'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { meetings } from '@/lib/data';
import { Calendar, Clock, Users } from 'lucide-react';

export function TodaysMeetings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Today's Meetings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {meetings.map((meeting) => (
            <AccordionItem value={meeting.id} key={meeting.id}>
              <AccordionTrigger>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-left">
                  <div className="font-semibold">{meeting.title}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>
                      {meeting.time} ({meeting.duration})
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-2">
                  <p className="text-sm">{meeting.details}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>With: {meeting.participants.join(', ')}</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
