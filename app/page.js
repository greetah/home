import Image from "next/image";
import { Suspense } from "react";
import greta from "../public/gretaworkman.jpg";
import NowPlaying from "./NowPlaying";

export const metadata = {
  title: "Greta Workman Homepage",
};

export const runtime = "edge";
export default async function Page() {
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
            <Suspense fallback=" ">
              <NowPlaying />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
