import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-primary/10 [mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]" />

      <div className="relative z-10 container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          {/* Text side */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none font-headline text-foreground">
                Hello, I’m Loganathan Abibarman
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold">
                Digital Marketing Executive | Visual Content Creator
              </p>
            </div>

            <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl/relaxed leading-relaxed">
              A passionate and result-driven Digital Marketing Executive & Visual Content Creator with a keen eye for aesthetics and a strategic mindset. Specializing in elevating fashion and textile brands through compelling visual narratives and impactful digital campaigns.
            </p>

            <div className="flex justify-center lg:justify-start pt-4">
              <a href="#portfolio">
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          {/* Image side – THIS WILL SHOW 100% SHOW */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/ddvjovt41/image/upload/w_900,h_900,c_fill,g_face,q_auto:eco,f_auto/v1765554587/abi/Untitled_design__1_1_u4d9ek.jpg"
                alt="Loganathan Abibarman"
                width={450}
                height={450}
                priority
                unoptimized // This line bypasses Next.js Image optimization for external URLs (fixes the blank image instantly)
                className="rounded-full object-cover aspect-square border-8 border-primary/40 shadow-2xl shadow-primary/30 ring-4 ring-background"
              />
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className className="h-6 w-6 text-muted-foreground/60" />
      </div>
    </section>
  );
}
