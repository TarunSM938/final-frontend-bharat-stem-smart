import Footer from "@/components/common/Footer";
import AdditionalSupport from "@/components/home/AdditionalSupport";
import Hero from "@/components/home/hero";
import STEMSolutions from "@/components/home/STEMSolutions";
import TransformSchool from "@/components/home/TransformSchool";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
    <main className="text-black">
      <Hero />
      <STEMSolutions />
      {/* ===== TARUN'S SECTIONS ===== */}
      
      <WhyChooseUs />
      <AdditionalSupport />
      <TransformSchool />

    </main>
  );
}
