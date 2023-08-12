
type MenuListProps = {
  menu: string
}

function MenuList({ menu }: MenuListProps) {
  return (
    <li className="text-center hover:scale-125  hover:duration-300 hover:cursor-pointer hover:text-background">{menu}</li>
  )
}

export default MenuList