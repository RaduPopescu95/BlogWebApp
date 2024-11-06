import SignIn from "@/components/Auth/SignIn";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin | Promovare Digitala - Next.js Blog Template",
  description: "This is signin page for Promovare Digitala",
};

const SignInPage = () => {
  return (
    <main>
      <SignIn />
    </main>
  );
};

export default SignInPage;
