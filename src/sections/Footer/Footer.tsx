import react from "../../assets/react.svg"

function Footer() {
  return (
    <div className="bg-primary text-background flex justify-center items-center sm:text-3xl font-semibold py-10">
      © 2023 BlackCat. Power of Tailwind and React. 
      <img src={react} alt="react" className="hidden sm:block animate-spin" />
    </div>
  )
}

export default Footer