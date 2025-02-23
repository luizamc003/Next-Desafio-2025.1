import HeroSection from "@/components/hero-section";
import InformationBar from "@/components/information-bar";
import Newsletter from "@/components/newsletter-section";
import ValuesContainer from "@/components/values-mission-containers";

export default function Home() {
  return (
    <div>
      <HeroSection /> <InformationBar /> <ValuesContainer /> <Newsletter />
    </div>
  );
}
