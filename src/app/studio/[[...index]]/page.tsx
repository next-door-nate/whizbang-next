"use client";

export const runtime = "edge";

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { useEffect } from "react";

export default function StudioPage() {
  // making sure base 10 rem sizing doesn't shrink the studio
  useEffect(() => {
    let html = document.querySelector("html");
    let body = document.querySelector("body");

    html?.classList.add("sanity-studio");
    body?.classList.add("sanity-studio");
  }, []);

  return <NextStudio config={config} />;
}
