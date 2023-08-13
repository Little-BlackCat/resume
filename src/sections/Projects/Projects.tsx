import Ports from "../../components/Ports/Ports"
import Title from "../../components/Title/Title"


function Projects() {
  return (
    <div className="px-5 md:px-10 xl:px-20 pt-36">
      <Title title="Project" />
      <Ports />
      <div className="py-12 text-3xl font-semibold text-right">
        <a href="https://github.com/Little-BlackCat" target="__blank">More.....</a>
      </div>
    </div>
  )
}

export default Projects