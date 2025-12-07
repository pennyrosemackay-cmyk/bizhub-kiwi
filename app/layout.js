// app/layout.js — THIS IS THE MISSING PIECE
import "./globals.css";               // ← THIS LINE WAS MISSING
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BizHub.Kiwi",
  description: "Kiwi Businesses. Powered by Locals, for Locals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
