import Link from 'next/link'
import getNowPlaying from 'pages/api/RecentlyPlayed.js'


export default function footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/gretaworkman">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/greetah">GitHub</ExternalLink>
        </div>

        </div>
    </footer>
  );
}