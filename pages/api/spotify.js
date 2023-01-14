import { getNowPlaying, processPlaying } from "../../lib/spotify";

export default async function handle(req, res) {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }
  const song = await response.json();

  return res.status(200).json(processPlaying(song));
}
