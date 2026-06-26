import { Container } from "./components/container";
import { Hero } from "./components/home/hero";
import { NeedsFunnel } from "./components/home/needs-funnel";
import { EquipmentShowcase } from "./components/home/equipment-showcase";
import { PolestarHighlight } from "./components/home/polestar-highlight";
import { BrandReveal } from "./components/home/brand-reveal";
import { CoreValues } from "./components/home/core-values";
import { GalleryWall } from "./components/home/gallery-wall";
import { GetStarted } from "./components/home/get-started";
import { Testimonials } from "./components/home/testimonials";
import { BlogSection } from "./components/home/blog-section";
import { CtaBand } from "./components/home/cta-band";

const values = [
  {
    title: "Polestar-certified team",
    body: "Every instructor is trained in Polestar's rehabilitation-informed method.",
  },
  {
    title: "Equipment for every level",
    body: "Reformers, GYROTONIC®, Konnector®, chairs, and barrels under one roof.",
  },
  {
    title: "Programs that fit you",
    body: "From first-timers to athletes, pre/postnatal to scoliosis-aware training.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* WHY MVP — welcome / value props */}
      <section className="bg-muted/40 py-16">
        <Container>
          <p className="max-w-3xl font-serif text-2xl leading-snug sm:text-3xl">
            Welcome to MVP — a studio where strength, mobility, and recovery meet
            expert, science-led coaching.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <h2 className="font-serif text-lg font-semibold">
                  {value.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <NeedsFunnel />
      <EquipmentShowcase />
      <BrandReveal />
      <CoreValues />
      <GalleryWall />
      <PolestarHighlight />
      <Testimonials />
      <BlogSection />
      <GetStarted />
      <CtaBand />
    </>
  );
}
