import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"
import NextAuthProvider from "@/app/Providers"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Charaka",
  description: "Predict any disease!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
