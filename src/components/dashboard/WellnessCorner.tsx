
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartPulse, Droplets, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const challenge = {
  title: "This week's challenge",
  description: "Drink 8 glasses of water daily!",
  action: "I did it today!",
};

export function WellnessCorner() {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    // In a real app, you'd save this state.
    setTimeout(() => setCompleted(false), 3000); // Reset after 3 seconds
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-accent" />
          Weekly Wellness Challenge
        </CardTitle>
      </CardHeader>
      <CardContent className="min-h-[8rem] flex flex-col items-center justify-center text-center gap-4">
        <Droplets className="h-12 w-12 text-primary" />
        <p className="text-lg font-semibold">
          {challenge.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleComplete} disabled={completed} size="lg">
          {completed ? (
            <>
              <CheckCircle className="mr-2 h-5 w-5" />
              Great job!
            </>
          ) : (
            challenge.action
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
