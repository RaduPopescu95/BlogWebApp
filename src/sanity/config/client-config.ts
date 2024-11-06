const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  apiVersion: "2024-11-04",
  token: process.env.NEXT_PUBLIC_SANITY_API_KEY as string,
  useCdn: false,
};

export default config;
