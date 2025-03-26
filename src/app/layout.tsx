import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SolanaProvider } from "@/components/connect/solana-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pine Stake",
  description: "Make the difference in the ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo-pine.svg" sizes="any" />
      </head>
      <body
        className={`${inter.className} min-h-screen scroll-smooth bg-background-100 dark:bg-dark-background-100 w-full flex flex-col items-center  justify-between`}
      >
        <SolanaProvider>
          <Header />
          <div className="w-full lg:px-16 px-6 py-0 flex flex-col items-center justify-center  max-w-[1920px] ">
            {children}
          </div>
          <Footer />
        </SolanaProvider>
      </body>
    </html>
  );
}
