import Image from "next/image";
import useSWR, { SWRConfig } from "swr";
import greta from "../public/gretaworkman.jpg";
import Head from "next/head";
import { getNowPlaying, processPlaying } from "../lib/spotify";

// Use an getStaticProps ISR + `fallback` with SWR
// @see https://swr.vercel.app/docs/with-nextjs#pre-rendering-with-default-data
// This technique allows us to use ISR on the first render,
// but then use SWR to get songs if they change while the user is on the
// page (after we use refreshInterval option later down this page).
export async function getStaticProps() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return { props: { fallback: { isPlaying: false } }, revalidate: 10 };
  }

  const song = await response.json();

  return {
    props: {
      fallback: {
        "/api/spotify": processPlaying(song),
      },
    },
  };
}

export default function Page({ fallback }) {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  // Wrap the main component with <SWRConfig>
  // @see https://swr.vercel.app/docs/with-nextjs#pre-rendering-with-default-data
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  );
}

function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  // This is prefetched w/ISR but then we refresh every 5 seconds for the latest
  // song.
  const { data } = useSWR("/api/spotify", fetcher, { refreshInterval: 5000 });
  return (
    <div className="max-w-4xl mx-auto px-10">
      <Head>
        <title>Greta Workman</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          property="description"
          content="Director of Product Marketing at Vercel"
          name="viewport"
        />
      </Head>

      <div className="justify-between flex flex-col sm:flex-row items-start py-10 w-full">
        <div className="sm:mr-8">
          <Image
            className="shadow-lg transition-shadow duration-200 rounded-lg w-full sm:w-auto hover:shadow-2xl"
            width={250}
            height={307}
            src={greta}
            priority={true}
          />
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1 -ml-[1px]">
            greta workman
          </h1>
          <h2 className="text-gray-700 text-lg mb-4">
            product marketing @{" "}
            <a className="my-underline font:semibold" href="https://vercel.com">
              Vercel
            </a>
          </h2>

          <div>
            <div className="flex flex-col text-gray-700 text-lg mb-4 sm:flex-row sm:space-y-0 sm:space-x-4 space-y-4">
              <div>
                <a
                  className="my-underline"
                  href="https://twitter.com/gretaworkman"
                >
                  Twitter
                </a>
              </div>
              <div>
                <a
                  className="my-underline"
                  href="https://www.linkedin.com/in/gretaworkman/"
                >
                  Linkedin
                </a>
              </div>
              <div>
                <a className="my-underline" href="https://github.com/greetah">
                  GitHub
                </a>
              </div>
            </div>
            {data?.isPlaying ? (
              <div className="grid-rows-auto grid-flow-col gap-4 py-6 pr-4 flex-grow-1">
                <div className="my-underline font:bold row-span-2">
                  <a href={data.songUrl}>Now Playing</a>
                </div>
                <div className="font-bold">
                  <p>{data.title}</p>
                  <p className="font-semibold">{data.artist}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
