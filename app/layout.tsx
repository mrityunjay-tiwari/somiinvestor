import type { Metadata } from "next";
import { Playpen_Sans, Rubik } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/home-page/header";
import FooterSection from "@/components/home-page/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Somi Conveyor Beltings Limited",
  description: "This is improved version of the official website of Somi Conveyor Beltings Limited",
  icons: {
    icon: "https://ik.imagekit.io/mrityunjay/Untitled%20design%20(18)%20logo.png?updatedAt=1759347003954"
  }
};

const playpen = Playpen_Sans({
  variable: "--font-shadow",
  weight: "300",
  style: "normal"
})

const rubik = Rubik({
  variable: "--font-shadow",
  weight: "300",
  style: "normal"
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className}`}
      > 
        <div className="flex min-h-screen flex-col">
        <HeroHeader />
      <main className="flex-grow">{children}</main>
      <FooterSection />
    </div>
      </body>
    </html>
  );
}
