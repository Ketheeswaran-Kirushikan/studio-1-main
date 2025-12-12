import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

export function VisionMissionSection() {
  return (
    <section id="vision" className="w-full py-20 md:py-32 bg-secondary/10">
      <div className=" px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">Vision & Mission</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                My personal and professional goals that drive my work and passion.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 lg:max-w-6xl lg:gap-16 pt-12">
          <AnimatedSection delay={100}>
            <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg border-border hover:border-primary transition-colors text-center md:text-left">
              <CardHeader>
                <CardTitle className="text-foreground">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become a leading digital marketing strategist and visual storyteller in the global fashion and textile industry, known for creating innovative and impactful brand experiences that resonate with audiences and drive business growth.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg border-border hover:border-primary transition-colors text-center md:text-left">
              <CardHeader>
                <CardTitle className="text-foreground">Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary">Short-Term</h3>
                  <p className="text-muted-foreground">
                    To secure a challenging role in a forward-thinking fashion brand where I can apply my skills in content creation and digital marketing to contribute to their success.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Long-Term</h3>
                  <p className="text-muted-foreground">
                    To establish my own creative agency specializing in digital marketing and visual branding for lifestyle and fashion clients.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg border-border hover:border-primary transition-colors text-center md:text-left">
              <CardHeader>
                <CardTitle className="text-foreground">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Continuously learn and adapt to the latest digital trends and technologies.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Deliver exceptional results and exceed client expectations.</span>
                  </li>
                   <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Build strong, collaborative relationships with clients and partners.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>Inspire creativity and innovation in every project.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
