import { Linear, gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.scss';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  useEffect(() =>{
  gsap.fromTo(".projects__title__box", {x: '100%'}, {x: 0, ease:Linear.easeNone,
    scrollTrigger: {
      trigger: ".projects__title__box",
      scrub: true,
      markers: false,
      start: "top bottom",
      end: "top 10%"
    }
  })
  }, [])

  return(
    <div id='projects'>
      <div className='projects__title__box'>
        <h1>PROJECTS</h1>
        <img src={process.env.PUBLIC_URL + "/assets/images/hand2.png"} />
      </div>
    </div>
  )
};

export default Projects;
