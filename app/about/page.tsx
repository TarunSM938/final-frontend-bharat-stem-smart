"use client";

import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import VisionMission from "../../components/about/Visionmission";
import WhyStem from "../../components/about/Whystem";
import TeamMembers from "../../components/about/Teammembers";
import CtaBanner from "../../components/about/Ctabanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <VisionMission />
     <WhyChooseUs />
      {/* <TeamMembers /> */}
       {/* <WhyStem /> */}
      <CtaBanner />
    </main>
  );
}