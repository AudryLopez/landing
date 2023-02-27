import { useRef } from 'react';
import { Inter } from 'next/font/google';
import { About, Home, Contact } from '@/components/layout/sections';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] })

export default function Landing() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <main  className="mx-auto flex flex-col">
        <Header scrollToRef={scrollToRef} useRefProps={{ homeRef, aboutRef, contactRef }}/>
        <section ref={homeRef}>
          <Home />
        </section >
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer/>
    </>
  )
}
