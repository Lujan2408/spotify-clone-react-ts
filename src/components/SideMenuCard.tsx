import type { Playlist } from "../lib/data"

type SideMenuCardProps = {
    playlist: Playlist
}

export default function SideMenuCard({ playlist } : SideMenuCardProps) {

    const { id, cover, title, artists, color } = playlist

    const artistString = artists.join(", ")

  return (
    <>
        <a
            href={`/playlist/${id}`}
            className="playlist-item flex relative p-2 overflow-hidden items-center gap-4 rounded-md hover:bg-zinc-800" 
        >
            <picture className=" h-12 w-12 flex-none">
                <img 
                    src={cover} 
                    alt={`Cover of ${title} by ${artistString}`} 
                    className=" object-cover w-full h-full rounded-md"
                />
            </picture>

            <div className=" flex flex-auto flex-col truncate">
                <h4 className=" text-white text-sm">
                    {title}
                </h4>

                <span className=" text-gray-400 text-sm">
                    {artistString}
                </span>
            </div>
        </a>
    </>
  )
}
