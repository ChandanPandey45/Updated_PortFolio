import './App.scss'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/hero'
import Parallax from './Componets/Parallax/Parallax'
import Portfolio from './Componets/portfolio/Portfolio'
import Contact from './Componets/contact/Contact'
import About from './Componets/Aboutme/About'
import Cursor from './Componets/cursor/Cursor'
import Experience from './Componets/Experience/Experience'


function App() {

  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>

      <section id='Experience'>
        <Experience />
      </section>

      <section id='MyProjects'>
        <Portfolio />
      </section>

      <section id='About'>
        <Parallax type="services" />
      </section>
      <section>
        <About />
      </section>

      <section id='Contact'> <Contact /> </section>
    </div>
  )
}

export default App
