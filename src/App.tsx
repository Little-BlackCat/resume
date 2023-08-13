import './App.css'
import AboutMe from './sections/AboutMe/AboutMe'
import Body from './sections/Body/Body'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {

  return (
    <div className='max-w-[1280px] w-[screen] mx-auto my-0 bg-background'>
      <Body />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
