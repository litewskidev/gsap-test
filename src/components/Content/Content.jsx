import './Content.scss';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx'
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx'
import AboutSecond from '../AboutSecond/AboutSecond';

const Content = () => {
  return(
    <div id='content'>
      <Home />
      <About />
      <Skills />
      <AboutSecond />
      <Projects />
      <Contact />
    </div>
  )
};

export default Content;
