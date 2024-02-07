import { ExclusiveOffers } from "../components/sections/ExclusiveOffers";
import { FAQ } from "../components/sections/FAQ";
import { Hero } from "../components/sections/Hero";
import { OurExpertise } from "../components/sections/OurExpertise";
import { Reputation } from "../components/sections/Reputation";
import { RoadMap } from "../components/sections/RoadMap";
import { Testimonial } from "../components/sections/Testimonial";
import { TrustedBy } from "../components/sections/TrustedBy";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExclusiveOffers />
      <Reputation />
      <OurExpertise />
      <TrustedBy />
      <RoadMap />
      <Testimonial />
      <FAQ />
    </main>
  );
}
