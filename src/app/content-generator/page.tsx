'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleExperienceDescription, handlePromotionalTweet } from './actions';
import { Loader2, Copy } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContentGeneratorPage() {
  const { toast } = useToast();

  const [experienceLoading, setExperienceLoading] = useState(false);
  const [experienceResult, setExperienceResult] = useState<string[]>([]);
  
  const [tweetLoading, setTweetLoading] = useState(false);
  const [tweetResult, setTweetResult] = useState<string[]>([]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copied to clipboard!' });
  };

  async function onExperienceSubmit(formData: FormData) {
    setExperienceLoading(true);
    setExperienceResult([]);
    const data = {
      experienceDetails: formData.get('experienceDetails') as string,
      tone: formData.get('tone') as string || 'creative',
      variations: Number(formData.get('variations')) || 1,
    };
    const result = await handleExperienceDescription(data);
    if ('error' in result) {
      toast({ variant: 'destructive', title: 'Error', description: result.error });
    } else {
      setExperienceResult(result.descriptions);
    }
    setExperienceLoading(false);
  }

  async function onTweetSubmit(formData: FormData) {
    setTweetLoading(true);
    setTweetResult([]);
    const data = {
      achievement: formData.get('achievement') as string,
      tone: formData.get('tone') as string || 'professional',
      variations: Number(formData.get('variations')) || 3,
    };
    const result = await handlePromotionalTweet(data);
    if ('error' in result) {
      toast({ variant: 'destructive', title: 'Error', description: result.error });
    } else {
      setTweetResult(result.tweets);
    }
    setTweetLoading(false);
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline text-accent">AI Content Generator</h1>
          <p className="text-muted-foreground mt-2">Tools for Loganathan to generate marketing content.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Experience Description Generator</CardTitle>
              <CardDescription>Generate creative descriptions of work experience.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={onExperienceSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experienceDetails">Experience Details</Label>
                  <Textarea id="experienceDetails" name="experienceDetails" placeholder="e.g., Managed social media for a fashion brand..." required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tone-exp">Tone</Label>
                    <Input id="tone-exp" name="tone" defaultValue="creative" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="variations-exp">Variations</Label>
                    <Input id="variations-exp" name="variations" type="number" defaultValue="1" min="1" max="5" />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={experienceLoading}>
                  {experienceLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generate Descriptions
                </Button>
              </form>
              {experienceResult.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Generated Descriptions:</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {experienceResult.map((desc, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>Variation {index + 1}</AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-4">
                           <p className="text-muted-foreground">{desc}</p>
                           <Button variant="ghost" size="sm" onClick={() => handleCopy(desc)}><Copy className="mr-2 h-4 w-4"/>Copy</Button>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Promotional Tweet Generator</CardTitle>
              <CardDescription>Generate promotional tweets for recent achievements.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={onTweetSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="achievement">Achievement</Label>
                  <Textarea id="achievement" name="achievement" placeholder="e.g., Successfully launched a new campaign that increased engagement by 30%..." required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tone-tweet">Tone</Label>
                    <Input id="tone-tweet" name="tone" defaultValue="professional" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="variations-tweet">Variations</Label>
                    <Input id="variations-tweet" name="variations" type="number" defaultValue="3" min="1" max="5" />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={tweetLoading}>
                  {tweetLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generate Tweets
                </Button>
              </form>
              {tweetResult.length > 0 && (
                 <div className="mt-6">
                  <h3 className="font-semibold mb-2">Generated Tweets:</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {tweetResult.map((tweet, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>Variation {index + 1}</AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-4">
                           <p className="text-muted-foreground">{tweet}</p>
                           <Button variant="ghost" size="sm" onClick={() => handleCopy(tweet)}><Copy className="mr-2 h-4 w-4"/>Copy</Button>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
