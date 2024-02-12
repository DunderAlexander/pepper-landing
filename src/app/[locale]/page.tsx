import TranslationsProvider from "@/src/components/providers/TranslationProvider";
import { ContactUs } from "../../components/sections/ContactUs";
import { ExclusiveOffers } from "../../components/sections/ExclusiveOffers";
import { FAQ } from "../../components/sections/FAQ";
import { Hero } from "../../components/sections/Hero";
import { OurExpertise } from "../../components/sections/OurExpertise";
import { OurTeam } from "../../components/sections/OurTeam";
import { Reputation } from "../../components/sections/Reputation";
import { RoadMap } from "../../components/sections/RoadMap";
import { Testimonial } from "../../components/sections/Testimonial";
import { WhereToMeet } from "../../components/sections/WhereToMeet";
import initTranslations from "../i18n";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { TrustedByMain } from "@/src/components/sections/TrustedByMain";

const i18nNamespaces = ["default"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Header />
      <main>
        <Hero />
        <ExclusiveOffers />
        <Reputation />
        <OurExpertise />
        <TrustedByMain />
        <RoadMap />
        <Testimonial />
        <FAQ />
        <OurTeam />
        <WhereToMeet />
        <ContactUs />
      </main>
      <Footer />
    </TranslationsProvider>
  );
}
