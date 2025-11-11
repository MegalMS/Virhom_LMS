// app/layout.js
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Join from "@/src/components/Join";
import Footer from "@/src/components/Footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "VirHom",
  description: "Your roadmap to fluency and confidence in English",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Join />
        <Footer />
      </body>
    </html>
  );
}
