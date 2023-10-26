import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  console.log("pages/app.js")
  return <Component {...pageProps} />
}
