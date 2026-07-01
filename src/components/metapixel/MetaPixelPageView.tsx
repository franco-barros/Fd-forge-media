"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { pageView } from "./facebook";

export default function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    pageView();
  }, [pathname, searchParams]);

  return null;
}
