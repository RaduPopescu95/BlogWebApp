"use client";

import config from "../../../../../sanity.config";
import { NextStudio } from "next-sanity/studio";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Verifică dacă sesiunea este încărcată și utilizatorul nu este autentificat
    if (
      status !== "loading" &&
      (!session || session.user.email !== "webdynamicx@gmail.com")
    ) {
      // Redirecționează către pagina de autentificare
      router.push("/auth/signin");
    }
  }, [session, status, router]);

  // Dacă sesiunea este încărcată, dar utilizatorul nu este cel corect, nu afișa pagina încă
  if (
    status === "loading" ||
    !session ||
    session.user.email !== "webdynamicx@gmail.com"
  ) {
    return <p>Loading...</p>;
  }

  return <NextStudio config={config} />;
}
