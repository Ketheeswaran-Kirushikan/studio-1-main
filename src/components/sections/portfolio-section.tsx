'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { AnimatedSection } from '@/components/ui/animated-section';
import { X } from 'lucide-react';
import { useState } from 'react';

const portfolioItems = [
  { src: 'https://res.cloudinary.com/ddvjovt41/image/upload/v1765546451/abi/1_1_ercfvl.jpg', alt: 'Fashion photoshoot - textiles and styling' },
  { src: 'https://res.cloudinary.com/ddvjovt41/image/upload/v1765546451/abi/youtube_Logo_h3bqbt.png', alt: 'YouTube branding & thumbnail design' },
  { src: 'https://res.cloudinary.com/ddvjovt41/image/upload/v1765546451/abi/fistlook_ltnv6o.jpg', alt: 'First Look campaign - fashion editorial' },
  { src: 'https://res.cloudinary.com/ddvjovt41/image/upload/v1765546452/abi/kannama_rge6ux.jpg', alt: 'Kannama collection - traditional meets modern' },
  { src: 'https://res.cloudinary.com/ddvjovt41/image/upload/v1765546451/abi/pos_dtvm9r.jpg', alt: 'Point of Sale visuals & retail branding' },
  { src: 'https://res.cloudinary.com/ddvjovt41/image/upload/v1765546450/abi/ECC_iq3cue.jpg', alt: 'ECC brand campaign - luxury textiles' },
];

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="portfolio" className="w-full py-20 md:py-32 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          {/* Heading */}
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-foreground">
                Portfolio Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Showcasing 5+ Years of Social Media Management, Photography & Editing in Textiles/Fashion
              </p>
            </div>
          </AnimatedSection>

          {/* Gallery Grid */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border-border/50 bg-background shadow-xl cursor-zoom-in transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
                  onClick={() => setSelectedImage(item.src)}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={600}
                      height={800}
                      unoptimized
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 3}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 text-white opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                    <p className="text-sm font-medium tracking-wide">{item.alt}</p>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <dialog
          open
          className="fixed inset-0 z-50 m-0 h-full w-full bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="flex h-full items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative max-h-full max-w-5xl">
              <Image
                src={selectedImage}
                alt="Full preview"
                width={1200}
                height={1600}
                unoptimized
                className="max-h-[90vh] w-auto rounded-2xl object-contain shadow-2xl"
                priority
              />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}