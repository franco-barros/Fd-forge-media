"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageView } from "./facebook";

export default function MetaPixelPageView() {
  const pathname = usePathname();

  useEffect(() => {
    pageView();
  }, [pathname]);

  return null;
}
