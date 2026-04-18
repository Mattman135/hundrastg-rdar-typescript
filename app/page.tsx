import { Suspense } from 'react'
import Header from "@/components/myComponents/Header";
import FAQ from "@/components/myComponents/FAQ";
import Footer from "@/components/myComponents/Footer";
import Hero from '@/components/myComponents/Hero';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />     
        <FAQ />
        
      </main>
      <Footer />
    </>
  );
}
