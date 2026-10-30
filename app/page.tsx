import About from "@/components/about";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Testimonials from "@/components/testimonials";
import ViewAll from "@/components/view-all";
import { elsewhere } from "@/content/site";
import { visibleCount, work } from "@/content/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Testimonials />

        <section id="work" aria-labelledby="work-heading" className="page-x mt-[18vh] scroll-mt-8">
          <h2 id="work-heading" className="section-title">
            Work
          </h2>
          <ViewAll items={work} visibleCount={visibleCount} />
        </section>

        <About />
        <Carousel
          id="elsewhere"
          heading={elsewhere.heading}
          intro={elsewhere.intro}
          items={elsewhere.items}
        />
      </main>
      <Footer />
    </>
  );
}
