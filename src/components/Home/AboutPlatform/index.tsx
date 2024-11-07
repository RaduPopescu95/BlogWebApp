import React from "react";
import Image from "next/image";

const AboutPlatform = () => {
  return (
    <section className="overflow-hidden pb-17.5">
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
        <div className="mt-17.5 flex flex-col items-center gap-7.5 lg:flex-row xl:gap-14">
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
            Misiunea Noastră
            </span>
            <h1 className="mb-5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
            Să Inspirăm și Să Conducem Transformarea Digitală

            </h1>
            <p>
            misiunea noastră este să ajutăm afacerile să-și atingă întregul potențial pe piața digitală. Credem în soluții personalizate și strategii atent create, care nu doar că atrag vizitatori, dar îi transformă în clienți fideli. Indiferent dacă ești la început de drum sau o afacere consolidată, noi aducem expertiză și inovație în fiecare proiect
            </p>
            <p className="mt-4.5">
            De ce să alegi Promovare Digitală? Oferim o gamă completă de servicii pentru a răspunde nevoilor tale specifice, de la promovare online până la dezvoltarea de website-uri și aplicații mobile. Înțelegem că fiecare afacere este unică, de aceea creăm soluții adaptate care să reflecte identitatea și valorile brandului tău.


            </p>
          </div>
        </div>
        <div className="mt-17.5 flex flex-col items-center gap-7.5 lg:flex-row xl:gap-14">
          <div className="w-full lg:max-w-[490px]">
            <span className="mb-2.5 inline-flex text-xl font-medium text-primary">
              Cum functioneaza
            </span>
            <h2 className="mb-5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
            Prezență Online Continuă pentru Afacerea Ta
            </h2>
            <p>
            Oferta de abonament oferă firmelor o prezență constantă pe platforma noastră, asigurând publicarea de articole și conținut optimizat, scrise în numele companiei tale. Prin aceste articole dedicate, afacerea ta va beneficia de o vizibilitate sporită în motoarele de căutare și o conexiune directă cu clienții potențiali, crescând astfel notorietatea online.
</p>

            <p className="mt-4.5">
            Pe lângă abonament, platforma noastră oferă servicii complete de creare website-uri, optimizare SEO și dezvoltare de aplicații mobile. Prin site-uri personalizate, optimizate SEO și aplicații mobile inovatoare, afacerea ta va atrage mai mulți clienți și va menține o prezență modernă în mediul digital, contribuind la succesul pe termen lung.

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
