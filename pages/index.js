import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-start py-8">
        <div className="sm:mr-8">
          <Image
            className="shadow-lg transition-shadow duration-200 rounded-lg w-full sm:w-auto hover:shadow-2xl"
            width={250}
            height={307}
            src="/gretaworkman.jpg"
          />
        </div>

        <div>
          <h1 className="-mx-2 px-2 font-bold text-3xl sm:text-4xl mb-1 hover:bg-pink-600 hover:shadow hover:rounded hover:font-extrabold">
            Greta Workman
          </h1>
          <h2 className="text-gray-700 mb-4">
            Product Marketing @ <span className="font-semibold">Vercel</span>
          </h2>
          <p className="text-gray-600 mb-16">
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
