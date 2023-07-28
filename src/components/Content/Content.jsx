import './Content.scss';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx'
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx'

const Content = () => {
  return(
    <div id='content'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
};

export default Content;
