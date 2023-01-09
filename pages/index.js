import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-start py-8">
        <div className="mr-8">
          <Image
            className="rounded-lg w-full sm:w-auto"
            width={250}
            height={307}
            src="/gretaworkman.jpg"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-3xl sm:text-4xl tracking-tight mb-1 text-black dark:text-white">
            Greta Workman
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Product Marketing @ <span className="font-semibold">Vercel</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Here is where I write a sick bio
          </p>
          <div className="w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
            <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 space-y-4">
              <div>
                <a
                  className="my-underline"
                  href="https://twitter.com/gretaworkman"
                >
                  Twitter
                </a>
              </div>
              <div>
                <a className="my-underline" href="https://github.com/greetah">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
