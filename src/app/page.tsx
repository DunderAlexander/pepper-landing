import { ContactUs } from "../components/sections/ContactUs";
import { ExclusiveOffers } from "../components/sections/ExclusiveOffers";
import { FAQ } from "../components/sections/FAQ";
import { Hero } from "../components/sections/Hero";
import { OurExpertise } from "../components/sections/OurExpertise";
import { OurTeam } from "../components/sections/OurTeam";
import { Reputation } from "../components/sections/Reputation";
import { RoadMap } from "../components/sections/RoadMap";
import { Testimonial } from "../components/sections/Testimonial";
import { TrustedBy } from "../components/sections/TrustedBy";
import { WhereToMeet } from "../components/sections/WhereToMeet";

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
      <OurTeam />
      <WhereToMeet />
      <ContactUs />
    </main>
  );
}
