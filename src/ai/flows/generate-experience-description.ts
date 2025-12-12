'use server';

/**
 * @fileOverview AI-powered flow to generate creative and engaging descriptions of Loganathan's work experience.
 *
 * - generateExperienceDescription - A function that generates experience descriptions.
 * - GenerateExperienceDescriptionInput - The input type for the generateExperienceDescription function.
 * - GenerateExperienceDescriptionOutput - The return type for the generateExperienceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateExperienceDescriptionInputSchema = z.object({
  experienceDetails: z.string().describe('Detailed information about the work experience, including roles, responsibilities, and achievements.'),
  tone: z.string().optional().describe('The desired tone of the description (e.g., professional, creative, enthusiastic). Defaults to creative.'),
  variations: z.number().optional().default(1).describe('The number of description variations to generate. Defaults to 1.'),
});
export type GenerateExperienceDescriptionInput = z.infer<typeof GenerateExperienceDescriptionInputSchema>;

const GenerateExperienceDescriptionOutputSchema = z.object({
  descriptions: z.array(z.string()).describe('An array of generated experience descriptions.'),
});
export type GenerateExperienceDescriptionOutput = z.infer<typeof GenerateExperienceDescriptionOutputSchema>;

export async function generateExperienceDescription(input: GenerateExperienceDescriptionInput): Promise<GenerateExperienceDescriptionOutput> {
  return generateExperienceDescriptionFlow(input);
}

const generateExperienceDescriptionPrompt = ai.definePrompt({
  name: 'generateExperienceDescriptionPrompt',
  input: {schema: GenerateExperienceDescriptionInputSchema},
  output: {schema: GenerateExperienceDescriptionOutputSchema},
  prompt: `You are a creative copywriter specializing in crafting engaging and compelling descriptions of work experience for digital marketing and content creation professionals.

  Given the following details about Loganathan's experience, generate {{{variations}}} description variation(s) that highlight his skills and achievements. The tone should be {{{tone}}}.:

  Experience Details: {{{experienceDetails}}}

  Each description should be concise, attention-grabbing, and tailored for use in a portfolio or professional profile.

  {{#each descriptions}}
  {{@index}}. {{{this}}}
  {{/each}}
  `,
});

const generateExperienceDescriptionFlow = ai.defineFlow(
  {
    name: 'generateExperienceDescriptionFlow',
    inputSchema: GenerateExperienceDescriptionInputSchema,
    outputSchema: GenerateExperienceDescriptionOutputSchema,
  },
  async input => {
    const numberOfVariations = input.variations || 1;
    const descriptions: string[] = [];

    for (let i = 0; i < numberOfVariations; i++) {
      const {output} = await generateExperienceDescriptionPrompt({
        ...input,
        variations: 1,
        tone: input.tone || 'creative',
      });
      if (output && output.descriptions && output.descriptions.length > 0) {
        descriptions.push(output.descriptions[0]);
      }
    }

    return {descriptions};
  }
);
