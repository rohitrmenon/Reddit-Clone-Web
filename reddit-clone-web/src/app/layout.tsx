import type { Metadata } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import StitchesRegistry from "./registry";

import { getCssText } from "../../stitches.config";

export const metadata: Metadata = {
  title: "thereisaidit",
  description: "thereisaidit - a reddit clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
       <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <StitchesRegistry>
          <Navbar />
          {children}
        </StitchesRegistry>
      </body>
    </html>
  );
}
