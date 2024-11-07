"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import "../globals.css";
import "../prism-theme.css";
import Header from "@/components/Header";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";
import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";
import { StripeSessionProvider } from "../context/StripeSessionContext";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="ro" suppressHydrationWarning>
           <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5ELN600F36"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5ELN600F36');
        `}
      </Script>
      <meta name="google-site-verification" content="4Oy9OuF_U8U8klw8BH9CPtlhGgM23UdFMlAYMGxdE_E" />
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <AuthProvider>
            <Header />
            <ToasterContext />
            <StripeSessionProvider>{children}</StripeSessionProvider>
            <Footer />
            <ScrollToTop />
          </AuthProvider>
        )}
      </body>
    </html>
  );
}
