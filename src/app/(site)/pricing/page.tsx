import React from "react";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page | Promovare Digitala - Next.js Blog Template",
  description: "This is Pricing Page page for Promovare Digitala",
  // other metaDescription
};

const PricingPage = () => {
  return (
    <main>
      <Pricing />
    </main>
  );
};

export default PricingPage;
