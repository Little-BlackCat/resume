import './App.css'
import AboutMe from './sections/AboutMe/AboutMe'
import Body from './sections/Body/Body'

function App() {

  return (
    <div className='max-w-[1280px] w-[screen] mx-auto my-0 bg-background'>
      <Body />
      <AboutMe />
    </div>
  )
}

export default App
