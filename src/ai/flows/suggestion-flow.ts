'use server';
/**
 * @fileOverview An AI flow to generate smart suggestions for the user.
 *
 * - generateSuggestion - A function that generates a suggestion based on meeting count.
 * - SuggestionInput - The input type for the generateSuggestion function.
 * - SuggestionOutput - The return type for the generateSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestionInputSchema = z.object({
  meetingCount: z.number().describe('The number of meetings the user has today.'),
});
export type SuggestionInput = z.infer<typeof SuggestionInputSchema>;

const SuggestionOutputSchema = z.object({
  suggestion: z.string().describe('A friendly, helpful suggestion for the user.'),
  emoji: z.string().describe('An emoji to go with the suggestion.'),
});
export type SuggestionOutput = z.infer<typeof SuggestionOutputSchema>;

export async function generateSuggestion(input: SuggestionInput): Promise<SuggestionOutput> {
  return suggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestionPrompt',
  input: {schema: SuggestionInputSchema},
  output: {schema: SuggestionOutputSchema},
  prompt: `You are a helpful and friendly assistant on a company intranet. Your goal is to provide a single, short, actionable suggestion to the user based on the number of meetings they have today.

Keep the tone light and encouraging.

- If the user has 3 or more meetings, suggest taking a short break.
- If the user has 1 or 2 meetings, you could suggest preparing for them.
- If the user has no meetings, suggest focusing on deep work or planning their week.

Example for 3 meetings:
suggestion: "You've got a busy day! Maybe block off 15 minutes for a quick break?"
emoji: "🧘‍♀️"

User has {{{meetingCount}}} meetings today.`,
});

const suggestionFlow = ai.defineFlow(
  {
    name: 'suggestionFlow',
    inputSchema: SuggestionInputSchema,
    outputSchema: SuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
