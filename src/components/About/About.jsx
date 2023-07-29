import './About.scss';
import { Linear, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const aboutImageRef = useRef(null);
  const aboutScreenRef = useRef(null);
  const imageTriggerRef = useRef(null);
  const infoTriggerRef = useRef(null);
  const screenTriggerRef = useRef(null);
  const aboutInfoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const img = aboutImageRef.current;
    const screen = aboutScreenRef.current;
    const imgTrigger = imageTriggerRef.current;
    const infoTrigger = infoTriggerRef.current;
    const screenTrigger = screenTriggerRef.current;
    const info = aboutInfoRef.current;

    tl.to(screen, {
      scrollTrigger: {
        trigger: imgTrigger,
        scrub: 0.1,
        markers: false,
        start: "top 80%",
        end: "top",
        toggleClass: {targets: ".about__screen__off", className: "off"}
      }
    }).fromTo(img, {scale: 1, y: 0, x:0, rotate: 0}, {scale: 8, y: '230%', x: "10%", rotate: "15deg", ease:Linear.easeNone,
      scrollTrigger: {
        trigger: infoTrigger,
        scrub: 0.1,
        markers: false,
        start: "top center",
        end: "top"
    }
    }).fromTo(screen, {opacity: 1}, {opacity: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: infoTrigger,
        scrub: 0.1,
        markers: false,
        start: "top 40%",
        end: "top"
    }
    }).to(img, {opacity:0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: screenTrigger,
        scrub: 0.1,
        markers: true,
        start: "top 88%",
        end: "top 88%",
    }
    })
  }, []);

  return(
    <div id='about'>
      <div className='about__container'>
        <div className='about__image' ref={aboutImageRef}>
          <div id='image-trigger' ref={imageTriggerRef}></div>
          <img className='about__table' src={process.env.PUBLIC_URL + '/assets/images/table2.webp'} alt='table' />
          <img className='about__monitor' src={process.env.PUBLIC_URL + '/assets/images/monitor1920p.webp'} alt='monitor' />
          <img className='about__screen__off' src={process.env.PUBLIC_URL + '/assets/images/screenOff1920.webp'} alt='screen off' />
          <img className='about__screen__on' src={process.env.PUBLIC_URL + '/assets/images/screen1920.webp'} alt='screen on' ref={aboutScreenRef} />
          <div id='info-trigger' ref={infoTriggerRef}></div>
        </div>
        <div className='about__info' ref={aboutInfoRef}>
          <div id='screen-trigger' ref={screenTriggerRef}></div>
          <p>My adventure with programming began about a year ago. Over time, it turned into a real passion. I love writing code and I strive to be able to devote as much time to it as possible. I create web applications using React and JSES6. I always care about clear code, cool design, responsiveness and user experience.</p>
        </div>
      </div>
    </div>
  )
};

export default About;
