import './App.scss'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/hero'
import Parallax from './Componets/Parallax/Parallax'
import Portfolio from './Componets/portfolio/Portfolio'
import Contact from './Componets/contact/Contact'
import About from './Componets/Aboutme/About'
import Cursor from './Componets/cursor/Cursor'


function App() {

  return (
    <div>
      <Cursor />
      <section id='Homepage'> <Navbar></Navbar>
        <Hero />
      </section>

      <section id=' MyProjects'> <Parallax type="portfolio" /> </section>
      <Portfolio></Portfolio>
      <section id='About'>
        <About />
      </section>
      <section id='Contact'> <Contact /> </section>
    </div>
  )
}

export default App
