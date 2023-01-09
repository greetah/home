import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-20">
      <Head>
        <title>Greta Workman</title>
        <meta
          property="description"
          content="Director of Product Marketing at Vercel"
        />
      </Head>
      <div className="flex justify-center p-4 sm:flex-row sm:space-y-0 sm:space-x-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 space-y-4">
          <div>
            <a className="my-underline" href="https://twitter.com/gretaworkman">
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
      </div>
      <div className="justify-between flex flex-col sm:flex-row items-start py-10">
        <div className="sm:mr-8">
          <Image
            className="shadow-lg transition-shadow duration-200 rounded-lg w-full sm:w-auto hover:shadow-2xl"
            width={250}
            height={307}
            src="/gretaworkman.jpg"
          />
        </div>

        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-1 -ml-[1px]">
            Greta Workman
          </h1>
          <h2 className="text-gray-700 text-lg mb-4">
            Product Marketing @{" "}
            <a className="my-underline font:semibold" href="https://vercel.com">
              Vercel
            </a>
          </h2>
          {/* <p className="text-gray-600 mb-16">
            
          </p> */}
        </div>
      </div>
    </div>
  );
}
