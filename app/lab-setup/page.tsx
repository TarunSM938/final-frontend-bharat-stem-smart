import StemLabHero from "../../components/stemlab/StemLabHero";
import WhatIsIncluded from "../../components/stemlab/WhatIsIncluded";
import Packages from "../../components/stemlab/Packages";
import ImplementationProcess from "../../components/stemlab/ImplementationProcess";
import FAQ from "../../components/stemlab/FAQ";
import StemLabCTA from "../../components/stemlab/StemLabCTA";
import Footer from "@/components/common/Footer";


export default function StemLabPage() {
  return (
    <main>
      <StemLabHero />
      <WhatIsIncluded />
      {/* <Packages /> */}
      <ImplementationProcess />
      <FAQ />
      <StemLabCTA />
      {/* <Footer /> */}
    </main>
  );
}