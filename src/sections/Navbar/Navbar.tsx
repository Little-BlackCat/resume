import cat_logo from "../../assets/icons/cat_logo.jpeg"
import menu from "../../assets/icons/menu.png"
import Menu from "../../components/Menu/Menu"

function Navbar() {
  return (
    <div  className='bg-primary text-base sticky top-0 py-4 px-8 lg:px-10 flex justify-between items-center border-b-2 border-base xl:px-28'>
      <div className="flex items-center gap-4">
        <img src={cat_logo} alt="logo" className="w-[60px] h-[60px] rounded-full sm:w-[80px] sm:h-[80px]" />
        <h1 className="japanese text-3xl sm:text-5xl">クロネコ</h1>
      </div>
      <img src={menu} alt="menu" className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:hidden" />
      <Menu />
    </div>
  )
}

export default Navbar