import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { wellnessTip } from '@/lib/data';
import { HeartPulse } from 'lucide-react';

export function WellnessCorner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-red-500" />
          {wellnessTip.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">
          {wellnessTip.quote}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          {wellnessTip.actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
