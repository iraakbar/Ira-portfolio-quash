import About from "@/components/about";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LogoStrip from "@/components/logo-strip";
import Nav from "@/components/nav";
import ViewAll from "@/components/view-all";
import { freeTime, onStage } from "@/content/site";
import { visibleCount, work } from "@/content/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoStrip />

        <section id="work" aria-labelledby="work-heading" className="page-x mt-[18vh] scroll-mt-8">
          <h2 id="work-heading" className="section-label">
            My recent work
          </h2>
          <ViewAll items={work} visibleCount={visibleCount} />
        </section>

        <About />
        <Carousel id="on-stage" heading="On stage" items={onStage} />
        <Carousel id="free-time" heading="In my free time, I…" items={freeTime} />
      </main>
      <Footer />
    </>
  );
}
