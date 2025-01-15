import AIInsights from "@/components/AIInsights";
import DataFetcher from "@/components/DataFetcher";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Instruments from "@/components/Instruments";
import Pricing from "@/components/Pricing";

export default async function Home() {
  return (
    <>
       <Hero />
      <Instruments />
      <Features />
      <AIInsights />
      <DataFetcher />
      <Pricing />
    </>
  );
}
