import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Category from "@/components/Home/Category";
import Authors from "@/components/Home/Authors";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { searchClient } from "@algolia/client-search";
import FirmaCallToAction from "@/components/Common/FirmaCallToAction";
import AboutPlatform from "@/components/Home/AboutPlatform";

export const metadata: Metadata = {
  title:
    "Promovare Digitala - Servicii de Promovare Online, Creare Website si Dezvoltare Aplicatii Mobile",
  description:
    "Oferim servicii de promovare online, creare website si dezvoltare aplicatii mobile. Contacteaza-ne pentru solutii digitale personalizate!",
  // other metaDescription
};

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <AboutPlatform />
      <Authors />
      <FirmaCallToAction />
    </>
  );
}
