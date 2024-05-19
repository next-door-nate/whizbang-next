import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: process.env.PREVIEW == "true" ? false : true,
  token: process.env.SANITY_API_TOKEN,
  perspective: process.env.PREVIEW == "true" ? "previewDrafts" : "published",
});
