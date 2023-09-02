import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="en"> {/* Add whichever language you want here */}
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <title>Pixel-Campione Development</title>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}