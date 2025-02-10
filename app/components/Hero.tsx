'use-client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="font-mono">
            <h1 className="text-6xl font-bold mb-4">Marcell Setiawan</h1>
            <h2 className="text-2xl mb-6">Web Developer</h2>
            <p className="text-lg mb-8 font-">Crafting beautiful and functional web experiences with a passion for clean code and user-centric design.</p>
            <Link href="https://github.com/Jokeronii?tab=repositories">
              <Button size="lg">View My Work</Button>
            </Link>
          </div>
          <div className="flex justify-end ">
            <Image src="https://github.com/Jokeronii.png" alt="Me" width={300} height={300} className="border-4 border-dashed border-indigo-950 rounded-3xl shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
