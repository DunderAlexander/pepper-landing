import { Header } from "@/src/components/layout/Header";
import { ContactUs } from "../../../components/sections/ContactUs";
import { PartnersDescription } from "../../../components/sections/PartnersDescription";
import { PartnersElevatingRetention } from "../../../components/sections/PartnersElevatingRetention";
import { PartnersOffer } from "../../../components/sections/PartnersOffer";
import { PartnersOurGuarantees } from "../../../components/sections/PartnersOurGuarantees";
import { PartnersSteps } from "../../../components/sections/PartnersSteps";
import { Footer } from "@/src/components/layout/Footer";
import TranslationsProvider from "@/src/components/providers/TranslationProvider";
import initTranslations from "../../i18n";
import { TrustedByPartners } from "@/src/components/sections/TrustedByPartners";
import { HeroPartners } from "@/src/components/sections/HeroPartners";

const i18nNamespaces = ["Partners", "default"];

export default async function PartnersPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <Header />
        <main>
          <HeroPartners />
          <PartnersDescription />
          <PartnersSteps />
          <PartnersOurGuarantees />
          <PartnersElevatingRetention />
          <TrustedByPartners />
          <PartnersOffer />
          <ContactUs />
        </main>
        <Footer />
      </TranslationsProvider>
    </>
  );
}
