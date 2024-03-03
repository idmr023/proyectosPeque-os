import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET({ params, request }) {
    //Forma sencilla y rápida de obtener el valor de id, en vez de deestructurar o tener que separar la url y de ahí obtener el valor
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')

    const playlist = allPlaylists.find(playlist => playlist.id === id)
    const songs = allSongs.filter(songs => songs.albumId === playlist?.albumId)

    return new Response(JSON.stringify({ playlist, songs}), {
        headers: { "content-type": "application/json" },
    })
}