'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { wellnessTip } from '@/lib/data';
import { HeartPulse, Play, Pause, RefreshCw } from 'lucide-react';

export function WellnessCorner() {
  const MEDITATION_DURATION = 120; // 2 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(MEDITATION_DURATION);
  const [isMeditating, setIsMeditating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isMeditating && !isPaused && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isMeditating, isPaused, timeLeft]);

  const toggleMeditation = () => {
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-accent" />
          {wellnessTip.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isMeditating ? (
          <p className="text-muted-foreground italic">{wellnessTip.quote}</p>
        ) : (
          <div className="flex flex-col items-center justify-center text-center h-24">
            {timeLeft > 0 ? (
              <>
                <p className="text-5xl font-bold font-mono tabular-nums">
                  {formatTime(timeLeft)}
                </p>
                <p className="text-muted-foreground mt-2">
                  {isPaused ? 'Paused' : 'Breathe...'}
                </p>
              </>
            ) : (
              <p className="text-lg font-semibold">
                Well done! You've completed your meditation.
              </p>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        {timeLeft > 0 ? (
          <>
            <Button className="w-full" onClick={toggleMeditation}>
              {isMeditating && !isPaused ? (
                <Pause className="mr-2 h-4 w-4" />
              ) : (
                <Play className="mr-2 h-4 w-4" />
              )}
              {isMeditating ? (isPaused ? 'Resume' : 'Pause') : wellnessTip.actionLabel}
            </Button>
            {isMeditating && (
              <Button
                variant="outline"
                size="icon"
                onClick={resetMeditation}
                aria-label="Reset Timer"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            )}
          </>
        ) : (
          <Button className="w-full" onClick={resetMeditation}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Start Again
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
