import type { Metadata } from "next";
import { Khand } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { SiteEffects } from "@/components/effects/SiteEffects";

const khand = Khand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-khand",
});

export const metadata: Metadata = {
  title: {
    default: "Jadida Construction",
    template: "%s | Jadida Construction",
  },
  description:
    "Jadida Construction Ltd building, renovation and property improvement specialists.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={khand.variable}>
      <body>
        <TopBar />
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <SiteEffects />
      </body>
    </html>
  );
}
