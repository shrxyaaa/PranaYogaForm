import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "../styles/globals.css";
import React from "react";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Pranayama Yoga</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
