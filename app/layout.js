import { Inter } from "next/font/google";
import '../styles/main.css';
import Whatsapp from "@/components/Whatsapp";
import Navbar from "@/components/Common/SiteHeader";
import Footer from "@/components/Common/SiteFooter";
import Head from "next/head";
import ContextMenuDisabler from "@/components/Common/RightClickDisabler";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MidhaFin",
  description: "Boost Your Career In Finance",
  keywords: ["best frm courses", " best frm course in india,best frm courses online", "frm certification", "frm exam", "best frm coaching", "best frm coaching online", "best frm coaching in bangalore", "best frm coaching in mumbai", "best frm coaching in india",
    "best frm coaching in kolkata", "best frm coaching in chennai", "best frm coaching institute in india", "best frm online coaching in india",
    "best frm coaching in india quora", "best coaching for frm", "best coaching for frm in india", "best online coaching for frm", "Top-rated FRM coaching",
    "Best FRM coaching institutes with high pass rates", "cfa", "cfa exam", "about cfa course", "best cfa prep course", "best cfa coaching in india", "frm exam prep", "frm exam registration", "frm exam level 1", "best way to prepare for frm exam", "best ways to study for the frm exam"]
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ userSelect: "none" }}>
      <Head>
        <meta property="og:title" content="MidhaFin:- Best prep provider" />
        <meta property="og:description" content="Boost Your Career In Finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frm.midhafin.com/" />
        <meta property="og:image" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MidhaFin:- Best prep provider" />
        <meta name="twitter:description" content="Boost Your Career In Finance" />
        <meta name="twitter:image" content="https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Homepage/open-graph-snippet_600*336.png.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <ContextMenuDisabler />
        <Whatsapp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
