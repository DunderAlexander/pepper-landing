import { ContactUs } from "../../components/sections/ContactUs";
import { Hero } from "../../components/sections/Hero";
import { PartnersDescription } from "../../components/sections/PartnersDescription";
import { PartnersOurGuarantees } from "../../components/sections/PartnersOurGuarantees";
import { PartnersSteps } from "../../components/sections/PartnersSteps";
import { TrustedBy } from "../../components/sections/TrustedBy";

export default function PartnersPage() {
  return (
    <main>
      <Hero />
      <PartnersDescription />
      <PartnersSteps />
      <PartnersOurGuarantees />
      <TrustedBy />
      <ContactUs />
    </main>
  );
}
