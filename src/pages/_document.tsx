import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <script src="https://kit.fontawesome.com/1191125d74.js"></script>
      <Head>
        <link rel="icon" href="/public/globe.svg" />
        <meta name="description" content="Seu site incrível!" />
        <title>Weather App</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
