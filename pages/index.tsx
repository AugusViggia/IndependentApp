import Head from 'next/head';
import { NextPage } from 'next';
import NavBar from "../components/NavBar/NavBar";
import Link from 'next/link';
import style from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IndependenT</title>
      </Head>
      <NavBar/>
      <div className={style.button}>
        <Link href="/SelectDev"><button>Cotizar proyecto</button></Link>  
      </div>
      
    </>
  );
}

export default Home;