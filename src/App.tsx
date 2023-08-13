import './App.css'
import Arrow from './components/Arrow/Arrow'
import AboutMe from './sections/AboutMe/AboutMe'
import Body from './sections/Body/Body'
import ContactMe from './sections/ContactMe/ContactMe'
import Experience from './sections/Experience/Experience'
import Footer from './sections/Footer/Footer'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {

  return (
    <div className='relative max-w-[1280px] w-[screen] mx-auto my-0 bg-background'>
      <Body />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <ContactMe />
      <Footer />
      <Arrow />
    </div>
  )
}

export default App
