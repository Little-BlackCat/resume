type MenuListProps = {
  menu: string
}

function MenuList({ menu }: MenuListProps) {
  return (
    <li className="hover:scale-125  hover:duration-300 hover:cursor-pointer text-center">{menu}</li>
  )
}

export default MenuList