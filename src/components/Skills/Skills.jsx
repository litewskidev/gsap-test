import { useEffect, useRef } from 'react';
import { Linear, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.scss';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsContainerRef = useRef(null);

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;

    gsap.fromTo(".skills__box", {scale: 0, opacity: 0}, { scale: 1, opacity: 1, duration: 1, ease:Linear.easeNone,
      stagger: {
        from: "start",
        axis: "x",
        amount: 1.5,
        ease: Linear.easeNone
      },
      scrollTrigger: {
        trigger: skillsContainer,
        scrub: true,
        start: "top 95%",
        end: "top 50%",
        markers: false,
        ease:Linear.easeNone
      }
    });
  }, [])

  return(
    <div id='skills'>
      <h1>SKILLS</h1>
      <div className='skills__container' ref={skillsContainerRef}>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/js.svg'} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/node-js.svg'} alt="Node" />
          <p>Node</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/react.svg'} alt="React" />
          <p>React</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/redux.svg'} alt="Redux" />
          <p>Redux</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/typescript.svg'} alt="TypeScript" />
          <p>TypeScript</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/html5.svg'} alt="HTML5" />
          <p>HTML5</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/css3-alt.svg'} alt="CSS3" />
          <p>CSS3</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/sass.svg'} alt="SASS" />
          <p>SASS</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/firebase.svg'} alt="Firebase" />
          <p>Firebase</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/expressjs.svg'} alt="Express" />
          <p>Express</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/git.svg'} alt="Git" />
          <p>Git</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/responsive-design.svg'} alt="RWD" />
          <p>RWD</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/bootstrap.svg'} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/framer.svg'} alt="Framer" />
          <p>Framer</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/visual-studio.svg'} alt="Visual Studio" />
          <p>VS</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/skills/greensock.svg'} alt="GSAP" />
          <p>GSAP</p>
        </div>
      </div>
    </div>
  )
};

export default Skills;
