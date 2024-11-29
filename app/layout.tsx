import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import FooterUpper from "@/components/FooterUpper";

const font = Raleway({ weight: "500", subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>GRC</title>
      </head>
      <body className={`${font.className} antialiased`}>
        <Header />
        <Breadcrumb />
        {children}
        <FooterUpper />
        <Footer />
      </body>
    </html>
  );
}
