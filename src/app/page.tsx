import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { Projects } from '@/components/Projects';

export default function Home() {
  // We extracted 80 frames using the script
  const frameCount = 80;

  return (
    <main className="bg-black text-white relative w-full h-full min-h-screen">
      {/* 
        The ScrollyCanvas provides a 500vh scrollable container.
        The Overlay is also 500vh container, absolute positioned to match
        the scroll track, with its contents sticky inside.
      */}
      <div className="relative">
        <Overlay />
        <ScrollyCanvas frameCount={frameCount} />
      </div>

      {/* 
        Projects is placed after the scroll zone, acting as the next section
        users seamlessly reach after finishing the canvas scroll.
      */}
      <Projects />
      
      {/* Footer */}
      <footer className="bg-black py-8 text-center text-sm text-neutral-500 border-t border-neutral-900">
        <p>© {new Date().getFullYear()} Mohit Gupta. All rights reserved.</p>
      </footer>
    </main>
  );
}
