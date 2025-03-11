import { About } from "@/components/About";
import { Cards } from "@/components/Cards";
import { Community } from "@/components/Community";
import { FAQs } from "@/components/FAQs";
import { HeroSection } from "@/components/HeroSection";
import { Supporters } from "@/components/Supporters";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[1920px] md:gap-[124px] gap-[80px]">
      <HeroSection />
      <About />
      <Cards />
      <Supporters />
      <FAQs />
      <Community />
    </main>
  );
}
