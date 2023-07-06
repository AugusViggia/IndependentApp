import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import { NextPage } from "next";

const FirstPost: NextPage = () => {
    return (
        <Layout home>
            <Head>
                <title>First Post</title>  
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log("script loaded correctly, windows.FB has been populated")
                } 
            />
            <h1>First Post</h1>  
            <h2>
               <Link href="/">Bach to home</Link> 
            </h2>
        </Layout>
    );
}

export default FirstPost;