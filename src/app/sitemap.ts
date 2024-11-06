import type { MetadataRoute } from "next";
import type { Blog } from "@/types/blog"; // Tipul `Blog` ar trebui să includă `publishedAt`, `slug`, etc.
import { getPosts } from "@/sanity/sanity-utils";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = "https://promovare-digitala.ro";

  // Obține postările din Sanity
  const posts: Blog[] = await getPosts();

  // URL-uri statice
  const staticUrls = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/despre-noi`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/firme-partenere`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/inscrie-firma`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articole-seo`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
  ];

  // URL-uri dinamice pentru postările blogului
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/postari/${post.slug.current}`,
    lastModified: new Date(post.publishedAt ?? new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // URL-uri unice pentru fiecare categorie
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/categorie/${category}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Combinația URL-urilor statice, dinamice și de categorii
  return [...staticUrls, ...postUrls, ...categoryUrls];
};

export default sitemap;
