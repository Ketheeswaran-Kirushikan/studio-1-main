import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';
import { Icons } from '@/components/icons';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_abiblaze09_/' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/14QR6MJ1Rus/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/abibarman-loganathan-753a13348' },
  { name: 'Email', icon: Mail, href: 'mailto:abibarman.27@gmail.com' },
  { name: 'WhatsApp', icon: Icons.whatsapp, href: 'https://wa.me/94774994671' },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 w-full">
      <div className=" px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Copyright © 2025 Loganathan Abibarman
        </p>
        <div className="flex gap-4">
          {socialLinks.map(({ name, icon: Icon, href }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-muted-foreground hover:text-primary transition-colors">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
