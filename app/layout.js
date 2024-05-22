import { Inter } from "next/font/google";
import '../styles/main.css';
import Whatsapp from "@/components/Whatsapp";
import Navbar from "@/components/SiteHeader";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import ("@/components/SiteFooter"), { ssr: false })

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MidhaFin",
  description: "Boost Your Career In Finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Whatsapp/>
        <Navbar/>
        {children}</body>
        <Footer/>
    </html>
  );
}
