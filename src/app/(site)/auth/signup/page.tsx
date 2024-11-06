import Signup from "@/components/Auth/SignUp";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | Promovare Digitala - Next.js Blog Template",
  description: "This is signup page for Promovare Digitala",
};

const SingupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SingupPage;
