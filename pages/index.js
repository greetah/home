import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home of Greetah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
            <section className=''>
                <main className='flex flex-col items-center justify-center min-h-screen space-y-3'>
                    <a
                        target='_blank'
                        rel='noopener noreferer'
                        href={
                            data?.isPlaying
                                ? data.songUrl
                                : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
                        }
                        className='relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72'
                    >
                        <div className='w-16'>
                            {data?.isPlaying ? (
                                <img
                                    className='w-16 shadow-sm'
                                    src={data?.albumImageUrl}
                                    alt={data?.album}
                                />
                            ) : (
                                <SiSpotify size={64} color={'#1ED760'} />
                            )}
                        </div>

                        <div className='flex-1'>
                            <p className='font-bold component'>
                                {data?.isPlaying ? data.title : 'Not Listening'}
                            </p>
                            <p className='text-xs font-dark'>
                                {data?.isPlaying ? data.artist : 'Spotify'}
                            </p>
                        </div>
                        <div className='absolute bottom-1.5 right-1.5'>
                            <SiSpotify size={20} color={'#1ED760'} />
                        </div>
                    </a>
                    <div>
                        <h3 className='text-center'>Example when playing:</h3>
                        <a
                            target='_blank'
                            rel='noopener noreferer'
                            href='https://open.spotify.com/track/4a0db84JDqxU4bpWjVDKxn'
                            className='relative flex items-center p-5 mx-auto space-x-4 transition-shadow border rounded-md hover:shadow-md w-72'
                        >
                            <div className='w-16'>
                                <img
                                    className='w-16 shadow-sm'
                                    src='https://i.scdn.co/image/ab67616d0000b273e1cc9c6608ce7a358fcd340c'
                                    alt='Dogrel'
                                />
                            </div>

                            <div className='flex-1'>
                                <p className='font-bold component'>Boys In the Better Land</p>
                                <p className='text-xs font-dark'>Fontaines D.C.</p>
                            </div>
                            <div className='absolute bottom-1.5 right-1.5'>
                                <SiSpotify size={20} color={'#1ED760'} />
                            </div>
                        </a>
                    </div>
                </main>
            </section>
        </>
        
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
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
