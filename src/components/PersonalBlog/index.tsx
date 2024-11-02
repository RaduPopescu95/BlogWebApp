import React from "react";
import Hero from "./hero";
import BlogItemContainer from "./BlogItemContainer";
import { getPostsByAuthorSlug } from "@/sanity/sanity-utils";

const PersonalBlog = async () => {
  const posts = await getPostsByAuthorSlug("ryna-kenter");

  return (
    <>
      <Hero />

      <section className="pb-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <BlogItemContainer posts={posts} />
        </div>
      </section>
    </>
  );
};

export default PersonalBlog;
