import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-xl mx-auto px-6">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between py-8">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Greta
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Product marketing{' '}
            <span className="font-semibold">Vercel</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Vercel
          </p>
        </div>

        <div className="">
          <Image className="rounded-lg" width={250} height={307} src="/gretaworkman.jpg"/>
        </div>

      </div>
      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <a href="https://twitter.com/gretaworkman">
            Twitter
          </a>
          <a href="https://github.com/greetah">GitHub</a>
        </div>

        </div>
    </footer>
    </div>
  )
};