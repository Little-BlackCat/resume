import MenuList from "../MenuList/MenuList";

type MenuProps = {
  status: string
}

function Menu({ status }: MenuProps ) {

  return (
    <div className={`${status} lg:flex`}>
      <ul className="text-2xl font-semibold grid grid-cols absolute bg-primary justify-center items-center top-[100px] -left-[150px] py-10 px-14 gap-8 rounded-2xl lg:rounded-none lg:flex lg:p-0 lg:static lg:flex-row lg:gap-10">
        <MenuList menu="Home" />
        <MenuList menu="About Me" />
        <MenuList menu="Projects" />
        <MenuList menu="Skills" />
        <MenuList menu="Contact" />
      </ul>
    </div>
  );
}

export default Menu;
