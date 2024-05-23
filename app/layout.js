import { Inter } from "next/font/google";
import '../styles/main.css';
import Whatsapp from "@/components/Whatsapp";
import Navbar from "@/components/SiteHeader";
import Footer from "@/components/SiteFooter";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MidhaFin",
  description: "Boost Your Career In Finance",
  og: {
    url: "https://www.frm.midhafin.com/",
    type: "website",
    title: "MidhaFin",
    description: "Boost Your Career In Finance",
    image:"https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/frm.midhafin.com/MidhaFin/Boost%20Your%20Career%20In%20Finance/https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"
  },
  twitter: {
    card: "summary_large_image",
    domain: "frm.midhafin.com",
    url: "https://www.frm.midhafin.com/",
    title: "MidhaFin",
    description: "Boost Your Career In Finance",
    image:"https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/frm.midhafin.com/MidhaFin/Boost%20Your%20Career%20In%20Finance/https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Whatsapp/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
