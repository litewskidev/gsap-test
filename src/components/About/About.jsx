import './About.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutInfoRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutScreenRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const info = aboutInfoRef.current;
    const img = aboutImageRef.current;
    const screen = aboutScreenRef.current;

    tl.fromTo(info, {y: 1000}, {y: 0,
      scrollTrigger: {
        trigger: img,
        scrub: true,
        markers: false,
        start: "top bottom",
        end: "top 50%"
    }
    }).fromTo(img, {scale: 1, y: 0, x:0}, {scale: 7, y: 800, x: 100,
      scrollTrigger: {
        trigger: "#skills",
        scrub: true,
        markers: false,
        start: "top bottom",
        end: "top 55%"
    }
    }).fromTo(screen, {opacity: 1}, {opacity: 0,
      scrollTrigger: {
        trigger: "#skills",
        scrub: true,
        markers: false,
        start: "top bottom",
        end: "top"
    }
    }).to(img, {opacity:0, duration: 0.1,
      scrollTrigger: {
        trigger: ".monitor__trigger",
        scrub: true,
        markers: false,
        start: "top bottom",
        end: "top bottom",
    }
    })
  }, []);

  return(
    <div id='about'>
      <div className='about__container'>
        <div className='about__info' ref={aboutInfoRef}>
          <p>My adventure with programming began about a year ago. Over time, it turned into a real passion. I love writing code and I strive to be able to devote as much time to it as possible. I create web applications using React and JSES6. I always care about clear code, cool design, responsiveness and user experience.</p>
        </div>
        <div className='about__image' ref={aboutImageRef}>
          <img className='about__table' src={process.env.PUBLIC_URL + '/assets/images/table2.webp'} />
          <img className='about__monitor' src={process.env.PUBLIC_URL + '/assets/images/monitor1920p.webp'} />
          <img className='about__screen__off' src={process.env.PUBLIC_URL + '/assets/images/screenOff1920.webp'} ref={aboutScreenRef}/>
          <img className='about__screen__on' src={process.env.PUBLIC_URL + '/assets/images/screen1920.webp'} />
        </div>
      </div>
    </div>
  )
};

export default About;
