import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";

const grotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  fallback: ["sans-serif"],
});

const sans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "VT Task 1",
  description: "Design task with animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grotesque.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
