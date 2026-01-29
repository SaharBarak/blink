import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import ContentTypes from "@/components/landing/ContentTypes";
import Architecture from "@/components/landing/Architecture";
import CodeExamples from "@/components/landing/CodeExamples";
import QuickStart from "@/components/landing/QuickStart";
import Comparison from "@/components/landing/Comparison";
import Included from "@/components/landing/Included";
import UseCases from "@/components/landing/UseCases";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Features />
      <ContentTypes />
      <Architecture />
      <CodeExamples />
      <QuickStart />
      <Comparison />
      <Included />
      <UseCases />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
