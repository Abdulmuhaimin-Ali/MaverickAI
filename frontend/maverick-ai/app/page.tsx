import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Instruments from '@/components/Instruments';
import Features from '@/components/Features';
import AIInsights from '@/components/AIInsights';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
// Import the DataFetcher component
import DataFetcher from '@/components/DataFetcher';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Header />
      <Hero />
      <Instruments />
      <Features />
      <AIInsights />
      <DataFetcher />
      <Pricing />
      <Footer />
    </main>
  );
}