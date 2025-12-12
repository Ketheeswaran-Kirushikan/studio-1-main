'use server';

import { generateExperienceDescription, type GenerateExperienceDescriptionInput, type GenerateExperienceDescriptionOutput } from '@/ai/flows/generate-experience-description';
import { generatePromotionalTweet, type GeneratePromotionalTweetInput, type GeneratePromotionalTweetOutput } from '@/ai/flows/generate-promotional-tweet';

export async function handleExperienceDescription(
  input: GenerateExperienceDescriptionInput
): Promise<GenerateExperienceDescriptionOutput | { error: string }> {
  try {
    const output = await generateExperienceDescription(input);
    return output;
  } catch (e: any) {
    console.error(e);
    return { error: e.message || 'An unknown error occurred.' };
  }
}

export async function handlePromotionalTweet(
  input: GeneratePromotionalTweetInput
): Promise<GeneratePromotionalTweetOutput | { error: string }> {
  try {
    const output = await generatePromotionalTweet(input);
    return output;
  } catch (e: any) {
    console.error(e);
    return { error: e.message || 'An unknown error occurred.' };
  }
}
