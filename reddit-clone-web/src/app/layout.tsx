import type { Metadata } from "next";
import Head from "next/head";


import Navbar from "../components/Navbar/Navbar";
import StitchesRegistry from "./registry";
import { getCssText } from "../../stitches.config";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Yorokobi",
  description: "Yorokobi - an unopinionated reddit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Provider>
          <StitchesRegistry>
            <Navbar />
            <div
              style={{
                marginBottom: "4rem",
                maxWidth: "1200px",
                minHeight: "100%",
                margin: "0 auto",
                padding: "1rem 1rem",
              }}
            >
              {children}
            </div>
          </StitchesRegistry>
        </Provider>
      </body>
    </html>
  );
}
