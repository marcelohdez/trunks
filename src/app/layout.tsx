import type { Metadata } from "next";
import { DM_Serif_Text, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "trunks.dev",
  description: "tbd",
};

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifText.className} ${poppins.className} antialised`}
    >
      <body>
        <NavBar />
        <div className="max-w-5xl mx-auto py-2 px-4">{children}</div>
      </body>
    </html>
  );
}
