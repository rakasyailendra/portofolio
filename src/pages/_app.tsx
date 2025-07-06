import { Cloudinary } from "@cloudinary/url-gen";
import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "../components/Templates/Layout";
import NextNProgress from "nextjs-progressbar";

const App = ({ Component, pageProps }: AppProps) => {
  const cld = new Cloudinary({ cloud: { cloudName: "druckyjuu" } });

  const [queryClient] = React.useState(() => new QueryClient());

  const colorLoadingBar =
    "linear-gradient(to right, rgb(254, 249, 195), rgb(155, 81, 235), rgb(135, 200, 228))";

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        <NextNProgress
          color={colorLoadingBar}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
};

export default App;
