import ContactFormSection from "@/components/contactus/ContactFormSection";
import HeroSection from "@/components/contactus/HeroSection";
import MapSection from "@/components/contactus/MapSection";
import StemLabSetupSection from "@/components/contactus/StemLabSetupSection";


export default function ContactPage() {
  return (
    <main>
      <HeroSection />
      <ContactFormSection />
      <StemLabSetupSection />
      <MapSection />
    </main>
  );
}