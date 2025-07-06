import Head from "next/head";
import { ThemeProvider } from "../Theme/theme-provider";
import Header from "../../Molecules/Header";
import Footer from "../../Molecules/Footer";
import VectorBackground from "../../Atoms/Photos/VectorBackground";
import React from "react";

// Font Awesome Script
const fontAwesomeScript = `
  (function() {
    var css = document.createElement("link");
    css.href = "https://kit.fontawesome.com/d7b1718817.js";
    css.rel = "stylesheet";
    css.crossOrigin = "anonymous";
    document.getElementsByTagName("head")[0].appendChild(css);
  })();
`;

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
        {/* [PERUBAHAN] Mengarahkan ke nama file ikon yang baru */}
        <link rel="icon" href="/logo.png" type="image/png" />
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