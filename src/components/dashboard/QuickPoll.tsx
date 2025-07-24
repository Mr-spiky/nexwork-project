'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { quickPoll as initialPollData } from '@/lib/data';
import type { Poll, PollOption } from '@/lib/types';
import { Vote } from 'lucide-react';

export function QuickPoll() {
  const [pollData, setPollData] = useState<Poll>(initialPollData);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = useMemo(() => {
    return pollData.options.reduce((acc, option) => acc + option.votes, 0);
  }, [pollData]);

  const handleVote = () => {
    if (!selectedOption) return;

    setPollData((prevData) => {
      const newOptions = prevData.options.map((option) =>
        option.id === selectedOption
          ? { ...option, votes: option.votes + 1 }
          : option
      );
      return { ...prevData, options: newOptions };
    });

    setHasVoted(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Vote className="h-5 w-5" />
          Quick Poll
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold mb-4">{pollData.question}</p>
        {!hasVoted ? (
          <RadioGroup onValueChange={setSelectedOption}>
            {pollData.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id}>{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="space-y-3">
            {pollData.options.map((option) => {
              const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
              return (
                <div key={option.id}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{option.text}</span>
                    <span className="text-sm font-medium">
                      {Math.round(percentage)}%
                    </span>
                  </div>
                  <Progress value={percentage} aria-label={`${option.text} poll result`} />
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {!hasVoted && (
          <Button className="w-full" onClick={handleVote} disabled={!selectedOption}>
            Vote
          </Button>
        )}
        {hasVoted && (
            <p className="text-sm text-muted-foreground text-center w-full">Thank you for voting!</p>
        )}
      </CardFooter>
    </Card>
  );
}
