'use client';
import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { generateSuggestion, SuggestionOutput } from '@/ai/flows/suggestion-flow';
import { Skeleton } from '../ui/skeleton';


export function SmartSuggestions({ meetingCount }: { meetingCount: number }) {
  const [suggestion, setSuggestion] = useState<SuggestionOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSuggestion() {
      setLoading(true);
      try {
        const result = await generateSuggestion({ meetingCount });
        setSuggestion(result);
      } catch (error) {
        console.error("Failed to fetch suggestion:", error);
        // Fallback suggestion
        setSuggestion({
            suggestion: 'Remember to take breaks and stay hydrated!',
            emoji: '💧'
        });
      }
      setLoading(false);
    }
    getSuggestion();
  }, [meetingCount]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-400" />
          Friendly Reminders
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
            <div className="flex items-start gap-3 p-3">
                <Skeleton className="h-7 w-7 rounded-full" />
                <div className='space-y-2 w-full'>
                    <Skeleton className="h-4 w-11/12" />
                    <Skeleton className="h-4 w-4/12" />
                </div>
            </div>
        ) : suggestion && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl pt-px">{suggestion.emoji}</div>
              <div>
                <p className="font-medium">{suggestion.suggestion}</p>
              </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
