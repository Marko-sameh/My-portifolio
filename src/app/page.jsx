import CoreTimeline from "@/components/ui/CoreTimeline";
import IdentitySection from "@/components/ui/IdentitySection";
import BuildsSection from "@/components/ui/BuildsSection";
import HeroBanner from "@/components/ui/HeroBanner";
import MasterySection from "@/components/ui/MasterySection";
import BeyondSection from "@/components/ui/BeyondSection";
import SignalSection from "@/components/ui/SignalSection";




export default function Page() {

  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });




  // const scrollTo = (id) => {
  //   const el = document.getElementById(id.toLowerCase());
  //   if (!el) return;
  //   window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  // };

  return (
    <div className="relative bg-black text-white overflow-x-hidden ">
      <HeroBanner></HeroBanner>
      <IdentitySection></IdentitySection>
      <MasterySection></MasterySection>
      <BuildsSection></BuildsSection>
      <CoreTimeline></CoreTimeline>

      <BeyondSection></BeyondSection>
      <SignalSection></SignalSection>

    </div>
  );
}