import HomeIcon from "../icons/HomeIcon"
import LibraryIcon from "../icons/LibraryIcon"
import SearchIcon from "../icons/SearchIcon"
import SideMenuItem from "./SideMenuItem"

export default function AsideMenu() {
  return (
    <nav className=" flex flex-col flex-1 gap-2">
      <div className=" bg-zinc-900 rounded-lg p-2">
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

      {/* #TODO ------
      Fix your library cover full screen */}
      <div className=" bg-zinc-900 rounded-lg p-2 flex-1">
        <ul>
          <SideMenuItem href="/">
            <LibraryIcon />
              Your Library
            </SideMenuItem>
        </ul>
      </div>
    </nav>
  )
}
