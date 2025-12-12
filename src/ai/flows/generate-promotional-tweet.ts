'use server';

/**
 * @fileOverview Generates promotional tweets for Loganathan Abibarnman highlighting recent achievements.
 *
 * - generatePromotionalTweet - A function that generates promotional tweets.
 * - GeneratePromotionalTweetInput - The input type for the generatePromotionalTweet function.
 * - GeneratePromotionalTweetOutput - The return type for the generatePromotionalTweet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePromotionalTweetInputSchema = z.object({
  achievement: z
    .string()
    .describe('The recent achievement to promote in the tweet.'),
  tone: z
    .string()
    .optional()
    .default('professional')
    .describe('The tone of the tweet (e.g., professional, creative, youthful).'),
  variations: z
    .number()
    .optional()
    .default(3)
    .describe('The number of tweet variations to generate.'),
});
export type GeneratePromotionalTweetInput = z.infer<
  typeof GeneratePromotionalTweetInputSchema
>;

const GeneratePromotionalTweetOutputSchema = z.object({
  tweets: z.array(z.string()).describe('An array of generated tweets.'),
});
export type GeneratePromotionalTweetOutput = z.infer<
  typeof GeneratePromotionalTweetOutputSchema
>;

export async function generatePromotionalTweet(
  input: GeneratePromotionalTweetInput
): Promise<GeneratePromotionalTweetOutput> {
  return generatePromotionalTweetFlow(input);
}

const generatePromotionalTweetPrompt = ai.definePrompt({
  name: 'generatePromotionalTweetPrompt',
  input: {schema: GeneratePromotionalTweetInputSchema},
  output: {schema: GeneratePromotionalTweetOutputSchema},
  prompt: `You are Loganathan's social media manager. Generate {{variations}} promotional tweets highlighting his recent achievement in a {{tone}} tone.\n\nAchievement: {{{achievement}}}`,
});

const generatePromotionalTweetFlow = ai.defineFlow(
  {
    name: 'generatePromotionalTweetFlow',
    inputSchema: GeneratePromotionalTweetInputSchema,
    outputSchema: GeneratePromotionalTweetOutputSchema,
  },
  async input => {
    const {output} = await generatePromotionalTweetPrompt(input);
    return output!;
  }
);
