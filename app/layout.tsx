import type { Metadata } from "next";
import { Libre_Franklin } from '@next/font/google';
import "./globals.css";
import Header from "@/components/Navbar/page";
import { sessionStatus } from "@/utils/session";
import StoreProvider from "./StoreProvider";

const inter = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          {sessionStatus ? <Header /> : ''}
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
