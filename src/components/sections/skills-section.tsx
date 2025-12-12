import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-secondary/10">
      <div className=" px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">Skills & Endorsements</h2>
          </div>
          <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm shadow-lg border-border">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                <Quote className="absolute -top-6 -left-6 h-16 w-16 text-primary/20" />
                <blockquote className="text-xl md:text-2xl font-medium text-foreground italic relative z-10 text-center">
                  “Possesses extensive hands-on experience in video editing, product photography, and social media management, with a proven track record of growing brand presence on platforms like Instagram, Facebook, and YouTube.”
                </blockquote>
                <Quote className="absolute -bottom-6 -right-6 h-16 w-16 text-primary/20 transform rotate-180" />
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
