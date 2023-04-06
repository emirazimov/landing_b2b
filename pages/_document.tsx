import { Html, Head, Main, NextScript } from "next/document";
import { Partytown } from '@builder.io/partytown/react';

export default function Document() {
  return (
    <Html style={{ scrollBehavior: "smooth" }} lang="en">
      <Head>
        <Partytown debug={true} forward={['dataLayer.push']} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
