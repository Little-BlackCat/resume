import dot from "../../assets/images/dot.png"

type TitleProp = {
  title: string;
}

function Title({ title }:TitleProp) {
  return (
    <div className="relative">
      <div className="absolute w-20 bottom-0">
        <img src={dot} alt="dot" />
      </div>

      <div>
        <h2 className="text-5xl font-bold">{title}</h2>
      </div>
    </div>
  )
}

export default Title