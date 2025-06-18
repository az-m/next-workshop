// import { Geist, Geist_Mono } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const nunitoSans = Nunito_Sans({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Blog",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
    type: "website",
    // url: "#", //root url for app
    // images: "[]", // a nice image to sell your site - needs to be in an array (could be more than one then!)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={nunitoSans.className}
      >
        <Header />
        {children}
        <footer className="m-10">MMXXV</footer>
      </body>
    </html>
  );
}
