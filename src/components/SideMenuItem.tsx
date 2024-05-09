
type SideMenuItemProps = {
    href?: string,
    children: React.ReactNode;
}

const SideMenuItem = ({ href, children } : SideMenuItemProps) => {
  return (
    <> 
      <li>
          <a 
              className="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"
              href={href}
          >
              {children}
          </a>
      </li>
    </> 
  )
}

export default SideMenuItem
