import Hero from '@/components/Hero';
import { Inter } from 'next/font/google';
import Services from '@/components/Services';
import Process from '@/components/Process';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Hero />
      <Services />
      <Process />
    </main>
  );
}
