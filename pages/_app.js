import Footer from '@/components/Footer';
import '@/styles/globals.css';
import dynamic from 'next/dynamic';

const Navbar = dynamic(import('../components/Navbar'), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
