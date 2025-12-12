'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { X, Play } from 'lucide-react';
import { useState } from 'react';

const videos = [
  { src: 'https://res.cloudinary.com/ddvjovt41/video/upload/v1765544911/abi/VID-20251211-WA0007_swtpoz.mp4', title: 'Fashion Reel – Dynamic Editing' },
  { src: 'https://res.cloudinary.com/ddvjovt41/video/upload/v1765544903/abi/VID-20251211-WA0005_wqavdv.mp4', title: 'Brand Promo Video' },
  { src: 'https://res.cloudinary.com/ddvjovt41/video/upload/v1765544903/abi/VID-20251211-WA0004_kawhnt.mp4', title: 'Textile Showcase' },
  { src: 'https://res.cloudinary.com/ddvjovt41/video/upload/v1765544892/abi/VID-20251211-WA0006_pfwmry.mp4', title: 'Behind The Scenes' },
  { src: 'https://res.cloudinary.com/ddvjovt41/video/upload/v1765544891/abi/VID-20251211-WA0003_ceeswy.mp4', title: 'Product Launch Teaser' },
];

export function VideoPortfolioSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section id="videos" className="w-full py-20 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold font-headline text-foreground">
                Project Videos
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Creative edits, reels & storytelling in motion
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="relative max-w-7xl mx-auto">
              {/* Messy, Pinterest-style grid */}
              <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
                {videos.map((video, i) => {
                  const rotations = ['rotate-1', '-rotate-2', 'rotate-3', '-rotate-1', 'rotate-2'];
                  const heights = ['h-80', 'h-96', 'h-72', 'h-88', 'h-80'];

                  return (
                    <div
                      key={i}
                      className={`break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${rotations[i % rotations.length]} ${heights[i % heights.length]}`}
                      onClick={() => setSelectedVideo(video.src)}
                    >
                      <video
                        src={video.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center rounded-2xl">
                        <div className="bg-white/20 backdrop-blur-md p-5 rounded-full">
                          <Play className="h-12 w-12 text-white" fill="white" />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-400">
                        <p className="text-white font-medium text-sm sm:text-base">{video.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fullscreen Modal with Controls */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition z-10"
          >
            <X className="h-10 w-10" />
          </button>

          <video
            src={selectedVideo}
            controls
            autoPlay
            className="max-h-[90vh] max-w-full rounded-2xl shadow-2xl"
          >
            Your browser does not support video.
          </video>
        </div>
      )}
    </>
  );
}