
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { wellnessTips } from '@/lib/data';
import { HeartPulse, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WellnessCorner() {
  const MEDITATION_DURATION = 120; // 2 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(MEDITATION_DURATION);
  const [isMeditating, setIsMeditating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const wellnessTip = useMemo(() => {
    return wellnessTips[Math.floor(Math.random() * wellnessTips.length)];
  }, []);

  useEffect(() => {
    if (isMeditating && !isPaused && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isMeditating, isPaused, timeLeft]);

  const toggleMeditation = () => {
    if (timeLeft === 0) {
      resetMeditation();
      return;
    }
    if (!isMeditating) {
      setIsMeditating(true);
      setIsPaused(false);
    } else {
      setIsPaused(!isPaused);
    }
  };

  const resetMeditation = () => {
    setIsMeditating(false);
    setIsPaused(false);
    setTimeLeft(MEDITATION_DURATION);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds
    ).padStart(2, '0')}`;
  };

  return (
    <Card className={cn(
        "transition-all duration-500",
        isMeditating && "bg-primary/10 dark:bg-primary/5"
    )}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-accent" />
          {wellnessTip.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="min-h-[8rem] flex items-center justify-center">
        {!isMeditating ? (
            <p className="text-muted-foreground italic text-center">
                "{wellnessTip.quote}"
            </p>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            {timeLeft > 0 ? (
              <>
                <p className="text-6xl font-bold font-mono tabular-nums text-primary">
                  {formatTime(timeLeft)}
                </p>
                <p className="text-muted-foreground mt-2 tracking-widest uppercase text-sm">
                  {isPaused ? 'Paused' : 'Breathe...'}
                </p>
              </>
            ) : (
              <p className="text-xl font-semibold text-primary">
                Nicely done!
              </p>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
         <Button className="w-full" onClick={toggleMeditation} size="lg">
              {isMeditating && !isPaused && timeLeft > 0 ? (
                <Pause className="mr-2 h-5 w-5" />
              ) : (
                <Play className="mr-2 h-5 w-5" />
              )}
              {isMeditating ? (timeLeft === 0 ? 'Start Again' : isPaused ? 'Resume' : 'Pause') : wellnessTip.actionLabel}
        </Button>
        {isMeditating && (
              <Button
                variant="ghost"
                className="text-muted-foreground"
                onClick={resetMeditation}
              >
                Reset
              </Button>
        )}
      </CardFooter>
    </Card>
  );
}
