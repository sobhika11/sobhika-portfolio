import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-main mt-12 bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full font-bold text-sm">
              S
            </div>
            <span className="font-bold text-lg tracking-tight text-text-main group-hover:text-primary transition-colors duration-300">
              Sobhika
            </span>
          </div>
          
          <div className="text-text-muted text-sm flex items-center gap-2 font-medium">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and React.js
          </div>
          
          <div className="text-text-muted text-sm font-medium">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
