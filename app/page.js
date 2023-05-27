import Image from "next/image";
import greta from "../public/gretaworkman.jpg";
import { getNowPlaying, processPlaying } from "../lib/spotify";

export const metadata = {
  title: "Greta Workman Homepage",
};

export default async function Page() {
  const response = await getNowPlaying();
  let data;
  if (response.status === 204 || response.status > 400) {
    data = { isPlaying: false };
  }

  const song = await response.json();
  data = processPlaying(song);
  return (
    <div className="max-w-4xl mx-auto px-10">
      <div className="justify-between flex flex-col sm:flex-row items-start py-10 w-full">
        <div className="sm:mr-8">
          <Image
            className="shadow-lg transition-shadow duration-200 rounded-lg w-full sm:w-auto hover:shadow-2xl"
            width={250}
            height={307}
            src={greta}
            // Adding `priority` since image is above the fold, this tells Next.js to load the image first
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
