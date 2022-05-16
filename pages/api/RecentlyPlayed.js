import querystring from 'querystring';

const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    return response.json();
};

export const getRecentlyPlayed = async () => {
    const { access_token } = await getAccessToken();

    return fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export default async (_, res) => {
    const response = await getRecentlyPlayed();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const data = {
      song: await response.json(),
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((_artist) => _artist.name).join(', '),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify
    };

    return res.status(200).json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    });
};