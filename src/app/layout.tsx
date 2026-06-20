import "../styles/globals.css";
import "keen-slider/keen-slider.min.css";

import { ReactNode } from "react";

import { Footer } from "../components/footer";
import { ClientNavbarWrapper } from "../components/clientnavbarwrapper";

import { Rethink_Sans, Jolly_Lodger } from "next/font/google";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rethink-sans",
});

const jolly = Jolly_Lodger({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jolly",
});

export const metadata = {
  title: "FD Forge Media | Marketing Digital y Publicidad",

  description:
    "Agencia de marketing digital y publicidad especializada en estrategias, contenido creativo, redes sociales y crecimiento de marcas.",

  keywords: [
    "marketing digital",
    "publicidad",
    "redes sociales",
    "branding",
    "creación de contenido",
    "agencia digital",
    "FD Forge Media",
  ],

  authors: [{ name: "FD Forge Media" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${rethinkSans.variable} ${jolly.variable}`}>
      <head>
        <link rel="icon" href="/logo/LogoFd1.png" sizes="any" />
      </head>

      <body>
        <ClientNavbarWrapper>{children}</ClientNavbarWrapper>

        <Footer />
      </body>
    </html>
  );
}
