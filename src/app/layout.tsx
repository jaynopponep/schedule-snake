import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "../components/MainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schedule Snake",
  description: "Enroll with Schedule Snake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <MainNavbar />
        <main className="flex-grow pt-16 overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
