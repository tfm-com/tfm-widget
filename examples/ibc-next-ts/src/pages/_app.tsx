import '@/styles/globals.css'
import '@0xtfm/widget-ibc/dist/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
