import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Category from "@/components/Home/Category";
import Authors from "@/components/Home/Authors";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { searchClient } from "@algolia/client-search";
import FirmaCallToAction from "@/components/Common/FirmaCallToAction";

export const metadata: Metadata = {
  title: "Promovare Digitala - Next.js Blog Template",
  description: "This is Home Blog page for Promovare Digitala",
  // other metaDescription
};

export default function Home() {
  const client = searchClient("S08AII0JZM", "a2e55f4c813e59d1f74d972960b3a663");

  // Fetch and index objects in Algolia
  const processRecords = async () => {
    const datasetRequest = await fetch(
      "https://dashboard.algolia.com/sample_datasets/movie.json",
    );
    const movies = await datasetRequest.json();
    return await client.saveObjects({
      indexName: "movies_index",
      objects: movies,
    });
  };

  processRecords()
    .then(() => console.log("Successfully indexed objects!"))
    .catch((err) => console.log("err...algolia", err));
  return (
    <>
      <Hero />
      <Category />
      <Authors />
      <FirmaCallToAction />
    </>
  );
}
