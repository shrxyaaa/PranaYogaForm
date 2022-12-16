import Head from 'next/head'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
  return (
    
    <>
    <Head>
       <title>Pranayama Yoga</title>
        <link rel="icon" href="/favicon.ico" />    
        </Head>

  <Component {...pageProps} />
   <Footer/>
   </>
   
  )
}

export default MyApp
