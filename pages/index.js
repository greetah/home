import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RecentlyPlayed from './api/RecentlyPlayed';

export default function Home() {
  return (
    <><div className={styles.container}>
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
      </main>
      <div>
        <section className=''>
          <main className='flex flex-col items-center justify-center min-h-screen space-y-3'>
            <a
              target='_blank'
              rel='noopener noreferer'
              href={data?.isPlaying
                ? data.songUrl
                : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'}
              className='relative flex items-center p-5 space-x-4 transition-shadow border rounded-md hover:shadow-md w-72'
            >
              <div className='w-16'>
                {data?.title ? (
                  <img
                    className='w-16 shadow-sm'
                    src={data?.albumImageUrl}
                    alt={data?.album} />
                ) : (
                  <SiSpotify size={64} color={'#1ED760'} />
                )}
              </div>

              <div className='flex-1'>
                <p className='font-bold component'>
                  {data?.title ? data.artist : 'Not Listening'}
                </p>
                <p className='text-xs font-dark'>
                  {data?.isPlaying ? data.artist : 'Spotify'}
                </p>
              </div>
              <div className='absolute bottom-1.5 right-1.5'>
                <SiSpotify size={20} color={'#1ED760'} />
              </div>
            </a>
          </main>
        </section>
      </>
      );
      {'}'}
    </div><footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer></>
    </div>
  )
}
