import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josephine = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animated Cards",
  description: "Design for folding animated cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josephine.className}>{children}</body>
    </html>
  );
}
