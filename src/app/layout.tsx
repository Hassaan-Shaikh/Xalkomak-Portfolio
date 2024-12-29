import "./globals.css";
import { DM_Sans } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Background from "@/components/Background";
import Layout from "@/components/Layout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="bg-[#181818] text-white">
        <Background />
        <Navbar />
        <Layout>
          <main>{children}</main>
        </Layout>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
