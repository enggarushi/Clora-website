import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";

/* ── Display serif — headings, very distinctive ── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

/* ── Friendly rounded sans — body copy ── */
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Clora | World's First Women's Health Ecosystem",
  description:
    "AI + Telehealth + Menstrual Care. Redefining reproductive healthcare for 1 Billion Women.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
