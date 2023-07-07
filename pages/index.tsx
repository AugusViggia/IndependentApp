import Head from 'next/head';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IndependenT</title>
      </Head>
      <section>
        <p>Oficina virtual de profesionales IT</p>
      </section>
      <Link href="/SelectDev">Select Dev</Link>
      <Link href="/Equipo">Equipo</Link>
      <Link href="/PortfolioTeam">Proyectos</Link>
    </>
      
  );
}

export default Home;