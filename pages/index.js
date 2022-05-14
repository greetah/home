import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si'

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
      </main>
        
    <footer className={styles.footer}>
    <a
          href={
            data?.isPlaying
            ? data.songUrl
            : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
            }
        className='relative flex w-100 items-center space-x-4 rounded-md border p-5 transition-shadow hover:shadow-md'
      >
        <div className='flex-1'>
          <p className='component font-bold'>
            {data?.isPlaying ? data.title : 'Not Listening'}
          </p>
          <p className='font-dark text-xxs'>
            {data?.isPlaying ? data.artist : 'Spotify'}
          </p>
        </div>
        <div className='center'>
          <SiSpotify size={20} color={'#1ED760'} />
        </div>
      </a>
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
