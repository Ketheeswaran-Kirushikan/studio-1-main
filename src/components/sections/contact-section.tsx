import { Instagram, Linkedin, Mail, Facebook, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Icons } from '@/components/icons';
import { AnimatedSection } from '@/components/ui/animated-section';

const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_abiblaze09_/' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/14QR6MJ1Rus/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/abibarman-loganathan-753a13348' },
    { name: 'WhatsApp', icon: Icons.whatsapp, href: 'https://wa.me/94774994671' },
];

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-background">
      <div className=" px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">Let’s Work Together</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Currently open for freelance projects and full-time roles in digital marketing & content creation.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection delay={100}>
            <Card className="h-full bg-card/80 backdrop-blur-sm shadow-lg border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-col justify-center h-full space-y-8">
                <Card className="bg-card/80 backdrop-blur-sm shadow-lg border-border">
                    <CardHeader>
                        <CardTitle className="text-foreground">Contact Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-primary"/>
                            <span>Loganathan Abibarnman<br/>46 Sivan Pannai Road, Jaffna</span>
                        </p>
                         <p className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-primary"/>
                            <a href="mailto:abibarman.27@gmail.com" className="hover:text-primary">abibarman.27@gmail.com</a>
                        </p>
                         <p className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary"/>
                            <a href="tel:+94774994671" className="hover:text-primary">0774994671</a>
                        </p>
                    </CardContent>
                </Card>

                <div className="space-y-4 text-center">
                    <p className="text-center text-muted-foreground">Or reach out through my social channels:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                    {socialLinks.map(({ name, icon: Icon, href }) => (
                        <Button key={name} variant="outline" size="icon" asChild className="rounded-full h-14 w-14 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110">
                        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                            <Icon className="h-6 w-6" />
                        </a>
                        </Button>
                    ))}
                    </div>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
