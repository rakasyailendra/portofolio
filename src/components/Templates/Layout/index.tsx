import Head from "next/head";
import { ThemeProvider } from "../Theme/theme-provider";
import Header from "../../Molecules/Header";
import Footer from "../../Molecules/Footer";
import VectorBackground from "../../Atoms/Photos/VectorBackground";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Rakasyainz.com</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Rakha Syailendra, a frontend developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" type="image/png" />
        
        {/* [PERBAIKAN] Menambahkan link ke pustaka ikon Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
        />
      </Head>
      
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <div className="max-w-[68rem] mx-auto">
          <Header />
          <main>{children}</main>
          <VectorBackground />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}