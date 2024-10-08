import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNavigationBar } from "./home/TopNavigationBar";
import Footer from "./home/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A1 associates",
  description: "This is A1 associates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <TopNavigationBar />
        <div className="relative auto bg-home-gradient">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
