import React from "react";
import { Metadata } from "next";
import Authors from "@/components/Home/Authors";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import Image from "next/image";
import FirmaCallToAction from "@/components/Common/FirmaCallToAction";

export const metadata: Metadata = {
  title:
    "Promovare Digitala - Experti in Promovare Online, Creare Website si Dezvoltare Aplicatii Mobile",
  description:
    "Promovare Digitala ofera servicii de promovare online, creare website si dezvoltare aplicatii mobile. Contacteaza-ne pentru solutii digitale eficiente!",
};

const AboutPage = () => {
  return (
    <main>
      <section className="overflow-hidden pb-17.5 pt-39">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-7.5 lg:flex-row xl:gap-14">
            <div className="w-full lg:max-w-[570px]">
              <Image
                src="/images/about/about.png"
                alt="about"
                className="w-full"
                width={570}
                height={400}
              />
            </div>

            <div className="w-full lg:max-w-[490px]">
              <span className="mb-2.5 inline-flex text-xl font-medium text-primary">
                Despre platforma
              </span>
              <h1 className="mb-5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
                Servicii Profesionale de Promovare Online, Dezvoltare Aplicații
                Mobile și Creare Website
              </h1>
              <p>
                Platforma noastră oferă o gamă completă de servicii de promovare
                online, dezvoltare aplicații mobile și creare website-uri
                personalizate. Suntem dedicați să creăm soluții digitale care
                ajută afacerea ta să se extindă, atrăgând trafic organic și
                generând rezultate măsurabile.
              </p>
              <p className="mt-4.5">
                Fie că este vorba de construirea unui magazin online sau de
                crearea unei aplicații mobile inovatoare, echipa noastră de
                experți în digitalizare este pregătită să dezvolte soluții care
                să se potrivească perfect nevoilor și obiectivelor tale.
              </p>
            </div>
          </div>
          <div className="mt-17.5 flex flex-col items-center gap-7.5 lg:flex-row xl:gap-14">
            <div className="w-full lg:max-w-[490px]">
              <span className="mb-2.5 inline-flex text-xl font-medium text-primary">
                Echipa Noastră
              </span>
              <h2 className="mb-5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
                Experți în Dezvoltare Digitală și Marketing Online
              </h2>
              <p>
                Suntem o echipă de specialiști cu experiență în dezvoltare
                aplicații mobile, marketing digital și creare de website-uri
                profesionale. De la optimizare SEO pentru a îmbunătăți
                vizibilitatea afacerii tale până la integrarea de soluții
                moderne de comerț electronic, oferim suport complet pentru
                creșterea prezenței tale online.
              </p>
              <p className="mt-4.5">
                Colaborăm îndeaproape cu tine pentru a înțelege publicul țintă
                și pentru a dezvolta strategii de promovare online
                personalizate, care aduc trafic, conversii și loialitate față de
                brand.
              </p>
            </div>
            <div className="w-full lg:max-w-[570px]">
              <Image
                src="/images/about/about.png"
                alt="about"
                className="w-full"
                width={570}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <Authors />
      <FirmaCallToAction />
    </main>
  );
};

export default AboutPage;
