import { Alegreya, Bebas_Neue } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Garo Waves",
  description: "Description of my website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={alegreya.className}>{children}</body>
    </html>
  );
}
