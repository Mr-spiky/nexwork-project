'use client';
import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { smartSuggestions } from '@/lib/data';

export function SmartSuggestions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-400" />
          Friendly Reminders
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {smartSuggestions.map((suggestion) => (
            <li key={suggestion.id} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl pt-px">{suggestion.emoji}</div>
              <div>
                <p className="font-medium">{suggestion.text}</p>
                {suggestion.link && (
                  <a href={suggestion.link.href} className="text-sm text-primary hover:underline">
                    {suggestion.link.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
