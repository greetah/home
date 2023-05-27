import { getNowPlaying, processPlaying } from "../lib/spotify";

export default async function NowPlaying() {
  const response = await getNowPlaying();
  let data;

  if (response.status === 204 || response.status > 400) {
    data = { isPlaying: false };
    if (response.status === 401) {
      console.error("TOKEN IS FUCKED: " + response.statusText);
    }
  } else {
    const song = await response.json();
    data = processPlaying(song);
  }
  return data?.isPlaying ? (
    <div className="grid-rows-auto grid-flow-col gap-4 py-6 pr-4 flex-grow-1">
      <div className="my-underline font:bold row-span-2">
        <a href={data.songUrl}>Now Playing</a>
      </div>
      <div className="font-bold">
        <p>{data.title}</p>
        <p className="font-semibold">{data.artist}</p>
      </div>
    </div>
  ) : null;
}
