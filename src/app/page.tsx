import Intro from "@/components/sections/Intro";
import Section from "@/components/sections/Section";
import Description from "@/components/sections/Description";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
