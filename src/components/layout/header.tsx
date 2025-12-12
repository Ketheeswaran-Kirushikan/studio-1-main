'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#vision', label: 'Vision' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#videos', label: 'Videos' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      )}
    >
      <div className=" mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="text-2xl font-bold font-headline text-primary">
            Abibarman
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}

          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl pb-4">
          <nav className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            
          </nav>
        </div>
      )}
    </header>
  );
}
