import HeroSection from "@/components/hero"
import FaqSection from "@/components/faq"
import SponsorSection from "@/components/sponsors"
import BottomSection from "@/components/bottom"

export default function Home() {
  return (
    <div className="relative bg-[#F8ECCD]">
      <HeroSection />
      <SponsorSection />
      <BottomSection />
    </div>
  )
}