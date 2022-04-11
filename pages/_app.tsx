import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/Layout'
import  Cart from '../context/cart'

function MyApp({ Component, pageProps }: any) {
  return (
    <Cart>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Cart>
  )
}

export default MyApp
