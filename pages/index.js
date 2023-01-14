import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import useSWR from "swr";
import { animate } from "motion";
import { getNowPlaying } from "./api/spotify";

export async function getStaticProps() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return { props: { isPlaying: false }, revalidate: 10 };
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return {
    props: {
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    },
    revalidate: 10,
  };
}

export default function Home(data) {
  // const fetcher = (url) => fetch(url).then((r) => r.json());
  // const { data } = useSWR("/api/spotify", fetcher);
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
            src="/gretaworkman.jpg"
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
