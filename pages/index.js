import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si'
import Spotify from './api/spotify';

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <div className={styles.container}>
      <Head>
        <title>greta</title>
        <meta name="description" content="Home of Greetah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Greta Workman
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
        </p>
        <Spotify />
      </main>
        
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
        Powered by{' '}
        <span className={styles.logo}>
         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
         </span>
        </a>
      </footer>
    </div>
  )
}
