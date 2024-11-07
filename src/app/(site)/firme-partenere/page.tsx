import React from "react";
import NewsletterSignup from "@/components/Common/NewsletterSignup";
import { getAuthors } from "@/sanity/sanity-utils";
import SingleAuthor from "@/components/Home/Authors/SingleAuthor";
import { Author } from "@/types/author";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promovare Digitala - Firme Promovate",
  description:
    "Aici vei gasi firme partenere din Romania, pentru a fi mai usor de gasit ce ai nevoie in orasul tau. Trebuie doar sa selectezi firma unde doresti serviciul, sa vizitezi pagina partenerului nostru si sa te programezi.",
  // other metaDescription
};

const AuthorsPage = async () => {
  const authors: Author[] = await getAuthors();

  return (
    <>
      <section className="mx-auto max-w-[1170px] px-4 pb-17.5 pt-31.5 sm:px-8 xl:px-0">
        <div className="mb-15 text-center">
          <h1 className="mb-3.5 text-heading-6 font-bold capitalize text-dark sm:text-heading-4 lg:text-heading-3">
            Author Page
          </h1>
          <p>{authors.length} Authors</p>
        </div>

        <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {/* <!-- Author Item --> */}
          {authors.map((author, key) => (
            <SingleAuthor author={author} key={key} />
          ))}
        </div>
      </section>
      <NewsletterSignup />
    </>
  );
};

export default AuthorsPage;
