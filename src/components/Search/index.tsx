"use client";
import { getPosts } from "@/sanity/sanity-utils";
import { useEffect, useState } from "react";
import SingleBlog from "../Common/SingleBlog";
import { Blog } from "@/types/blog";
import Link from "next/link";

const Search = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [filtredPosts, setFiltredPosts] = useState<Blog[]>([]);
  const [query, setQuery] = useState("");
  const [county, setCounty] = useState(""); // Stare pentru județ
  const [locality, setLocality] = useState(""); // Stare pentru localitate

  const filterPosts = (query: any, county: string, locality: string) => {
    const results: Blog[] = posts.filter((post: Blog) => {
      const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
      const matchesCounty = county ? post.county === county : true;
      const matchesLocality = locality ? post.locality === locality : true;
      return matchesQuery && matchesCounty && matchesLocality;
    });
    setFiltredPosts(results);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
      setFiltredPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <section className="pb-17.5">
      <div className="mb-12.5 bg-gray pb-12.5 pt-34">
        <div className="mx-auto w-full max-w-[1080px] px-4 text-center sm:px-8 xl:px-0">
          <h1 className="mb-3.5 text-heading-6 font-bold text-dark sm:text-heading-4 lg:text-heading-3">
            {query !== "" ? `Search results for: ${query}` : "Search posts here"}
          </h1>
          <p>{filtredPosts.length} Articole postate</p>

          <div className="mt-7.5">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-wrap gap-2 items-center">
                {/* Inputul de căutare cu iconița în stânga */}
                <div className="relative w-full sm:w-[48%] md:w-[30%] lg:w-[25%]">
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2813 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1563 18.5625 19.2813 18.4063C19.5313 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2813 4.53125C14.6563 6.90625 14.6563 10.75 12.2813 13.0938C11.1563 14.25 9.625 14.875 8 14.875Z"
                      fill="#15171A"
                    />
                  </svg>
                  <input
                    onChange={(e) => {
                      setQuery(e.target.value);
                      filterPosts(e.target.value, county, locality);
                    }}
                    value={query}
                    type="search"
                    name="search"
                    id="search-input"
                    placeholder="Search posts, tags and authors"
                    className="w-full rounded-lg border border-gray-3 bg-white py-4.5 pl-12 pr-3 outline-none duration-200 ease-in placeholder:text-dark-3 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                  />
                </div>

                {/* Selectorul pentru județ */}
                <select
                  onChange={(e) => {
                    setCounty(e.target.value);
                    filterPosts(query, e.target.value, locality);
                  }}
                  value={county}
                  className="w-full sm:w-[48%] md:w-[30%] lg:w-[25%] rounded-lg border border-gray-3 bg-white py-4 px-3 outline-none duration-200 ease-in focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                >
                  <option value="">Selectează județ</option>
                  <option value="București">București</option>
                  <option value="Cluj">Cluj</option>
                </select>

                {/* Selectorul pentru localitate */}
                <select
                  onChange={(e) => {
                    setLocality(e.target.value);
                    filterPosts(query, county, e.target.value);
                  }}
                  value={locality}
                  className="w-full sm:w-[48%] md:w-[30%] lg:w-[25%] rounded-lg border border-gray-3 bg-white py-4 px-3 outline-none duration-200 ease-in focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                >
                  <option value="">Selectează localitate</option>
                  <option value="Cluj-Napoca">Cluj-Napoca</option>
                  <option value="Florești">Florești</option>
                </select>

                {/* Linkul "Înscrie firmă" */}
                <Link
                  href={"/inscrie-firma"}
                  className="flex w-full sm:w-[48%] md:w-[30%] lg:w-[20%] justify-center rounded-md bg-dark px-5.5 py-2.5 font-medium text-white hover:opacity-90 lg:transition-all lg:duration-200 lg:ease-linear"
                >
                  Înscrie firmă
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-x-7.5 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
          {filtredPosts.map((blog, key) => (
            <SingleBlog post={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
