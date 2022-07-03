import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import CategoryList from '../components/CategoryList'
import commerce from '../lib/commerce'



function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
