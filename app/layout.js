import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "./Component/BootstrapConnection";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayush's Portfolio",
  description: "Dynamic portfolio showcasing diverse, impactful work, demonstrating creativity, versatility, and professionalism to engage and leave a lasting impression.",
  openGraph: {
    title: "Ayush's Portfolio",
    description:
      "Dynamic portfolio showcasing diverse, impactful work, demonstrating creativity, versatility, and professionalism to engage and leave a lasting impression.",
    siteName: "Ayush's Portfolio",
    images: [
      {
        url: "/Images/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Ayush's Portfolio OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush's Portfolio",
    description:
      "Dynamic portfolio showcasing diverse, impactful work, demonstrating creativity, versatility, and professionalism to engage and leave a lasting impression.",
    images: ["/Images/ogimage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
          <BootstrapClient/>
      </body>
    </html>
  );
}
