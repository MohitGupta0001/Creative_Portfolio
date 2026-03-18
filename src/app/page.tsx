import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { Projects } from '@/components/Projects';
import Link from 'next/link';

export default function Home() {
  // We extracted 80 frames using the script
  const frameCount = 120;

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
        Resume Callout Section
        Inserted after the scrolly section so it doesn't overlap the hero image.
      */}
      <section className="py-24 bg-black flex flex-col items-center justify-center border-t border-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d2ff]/5 to-transparent pointer-events-none"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white z-10 px-4">
          Want to know more about my background?
        </h2>
        <Link href="/resume" className="z-10 px-8 py-4 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] rounded-full text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.6)]">
          View My Full Resume
        </Link>
      </section>

      {/* 
        Projects is placed after the Resume callout, continuing the content flow.
      */}
      <Projects />
      
      {/* Footer */}
      <footer className="bg-black py-8 text-center text-sm text-neutral-500 border-t border-neutral-900">
        <p>© 2025 Mohit Gupta. All rights reserved.</p>
      </footer>
    </main>
  );
}
