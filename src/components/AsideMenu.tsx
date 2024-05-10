import HomeIcon from "../icons/HomeIcon"
import LibraryIcon from "../icons/LibraryIcon"
import SearchIcon from "../icons/SearchIcon"
import SideMenuItem from "./SideMenuItem"
import SideMenuCard from './SideMenuCard'
import { playlists } from "../lib/data"

export default function AsideMenu() {
  return (
    <nav className="flex flex-col flex-1 gap-2">
      <div className="bg-zinc-900 rounded-lg p-2">
        <ul>
          <SideMenuItem href="/">
            <HomeIcon />
              Home
          </SideMenuItem>
          
          <SideMenuItem href="/#">
            <SearchIcon />
              Search
          </SideMenuItem>
        </ul>
      </div>

      <div className="bg-zinc-900 rounded-lg p-2 flex-1">
        <ul>
          <SideMenuItem href="/">
            <LibraryIcon />
              Your Library
            </SideMenuItem>

            {
              playlists.map(playlist => (
                <SideMenuCard 
                  playlist={playlist}
                />
              ))
            }
        </ul>
      </div>
    </nav>
  )
}
