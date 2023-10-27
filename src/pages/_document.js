import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  console.log("pages/document.js")
  return (
    <Html lang="ru">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
