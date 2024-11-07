import React from "react";
import Image from "next/image";

const AboutPlatform = () => {
  return (
    <section className="overflow-hidden pb-17.5 pt-39">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col items-center gap-7.5 lg:flex-row xl:gap-14">
          <div className="w-full lg:max-w-[570px]">
            <Image
              src="/images/about/about.png"
              alt="Despre platformă"
              className="w-full"
              width={570}
              height={400}
            />
          </div>

          <div className="w-full lg:max-w-[490px]">
            <span className="mb-2.5 inline-flex text-xl font-medium text-primary">
              Despre platformă
            </span>
            <h1 className="mb-5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Promovăm Firmele Locale – Vizibilitate pentru Afacerea Ta
            </h1>
            <p>
              Platforma noastră este destinată promovării firmelor locale,
              indiferent de domeniul de activitate. Oferim soluții complete
              pentru a crește vizibilitatea companiilor prin promovare online,
              creare de website-uri optimizate SEO și dezvoltare de aplicații
              mobile.
            </p>
            <p className="mt-4.5">
              Fie că afacerea ta oferă servicii, produse sau activități locale,
              noi te ajutăm să atragi clienți locali și să-ți extinzi prezența
              în comunitate, utilizând cele mai moderne tehnici de digitalizare.
            </p>
          </div>
        </div>
        <div className="mt-17.5 flex flex-col items-center gap-7.5 lg:flex-row xl:gap-14">
          <div className="w-full lg:max-w-[490px]">
            <span className="mb-2.5 inline-flex text-xl font-medium text-primary">
              Echipa noastră
            </span>
            <h2 className="mb-5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
              Experți în Promovare Digitală și Sprijin pentru Firme Locale
            </h2>
            <p>
              Echipa noastră este dedicată succesului firmelor locale. Avem
              experiență în optimizarea prezenței online pentru a aduce trafic
              de calitate și clienți locali, utilizând tehnici avansate de SEO
              și strategii personalizate de promovare digitală.
            </p>
            <p className="mt-4.5">
              Colaborăm îndeaproape cu fiecare afacere pentru a dezvolta soluții
              adaptate nevoilor pieței locale, crescând astfel vizibilitatea și
              credibilitatea brandului tău în comunitate.
            </p>
          </div>
          <div className="w-full lg:max-w-[570px]">
            <Image
              src="/images/about/about.png"
              alt="Echipa noastră"
              className="w-full"
              width={570}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
