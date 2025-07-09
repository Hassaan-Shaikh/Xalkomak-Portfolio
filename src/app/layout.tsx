import "./globals.css";
import { DM_Sans } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Background from "@/components/Background";
import Layout from "@/components/Layout";
import Head from "next/head";

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
      <Head>
        <meta name="description" content="Greetings! This is Xalkomak's website!"/>
        <meta property="og:title" content="Xalkomak" />
        <meta property="og:description" content="Xalkomak's personal website." />
        <meta property="og:image" content="public/imgs/MrVpfp_small.png" />
        <meta property="og:url" content="https://xalkomak.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
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
