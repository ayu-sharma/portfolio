import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "./Component/BootstrapConnection";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Dynamic portfolio showcasing diverse, impactful work, demonstrating creativity, versatility, and professionalism to engage and leave a lasting impression.",
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
