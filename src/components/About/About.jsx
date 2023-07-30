import { Linear, gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
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
        scrub: true,
        markers: false,
        start: "top 80%",
        end: "top",
        toggleClass: {targets: [".about__screen__off", ".about__screen__info"], className: "off"},
        invalidateOnRefresh: true
      }
    }).fromTo(img, {scale: 1, y: 0, x: 0, rotate: 0}, {scale: 8, y: '230%', x: "10%", rotate: "15deg", ease:Linear.easeNone,
      scrollTrigger: {
        trigger: infoTrigger,
        scrub: true,
        markers: false,
        start: "top center",
        end: "top",
        invalidateOnRefresh: true
      }
    }).fromTo(screen, {opacity: 1}, {opacity: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: infoTrigger,
        scrub: true,
        markers: false,
        start: "top 40%",
        end: "top",
        invalidateOnRefresh: true
      }
    }).to(img, {opacity: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: screenTrigger,
        scrub: true,
        markers: false,
        start: "top 88%",
        end: "top 88%",
        invalidateOnRefresh: true
      }
    }).fromTo(".about__info__header", {y: -1200, opacity: 0}, {y: 0, opacity: 1, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: ".about__info__header",
        scrub: true,
        markers: false,
        start: "top 90%",
        end: "top",
        pin: [".about__info__text left", ".about__info__text right"]
      }
    }).fromTo(".about__info__text.right", {x: "100%"}, {x: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: ".discs__trigger",
      start: "top bottom",
      end: "top center",
      scrub: true
    }
    }).fromTo(".about__info__text.left", {x: "-100%"}, {x: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: ".discs__trigger",
      start: "top bottom",
      end: "top center",
      scrub: true
    }
    }, "<")
  }, []);

  return(
    <div id='about'>
      <div className='about__container'>
        <div className='about__image' ref={aboutImageRef}>
          <div id='image-trigger' ref={imageTriggerRef}></div>
          <img className='about__image__overlay' src={process.env.PUBLIC_URL + '/assets/images/overlay.png'} />
          <img className='about__table' src={process.env.PUBLIC_URL + '/assets/images/table2.webp'} alt='table' />
          <img className='about__monitor' src={process.env.PUBLIC_URL + '/assets/images/monitor1920p.webp'} alt='monitor' />
          <img className='about__screen__off' src={process.env.PUBLIC_URL + '/assets/images/screenOff1920.webp'} alt='screen off' />
          <img className='about__screen__on' src={process.env.PUBLIC_URL + '/assets/images/screen1920.webp'} alt='screen on' ref={aboutScreenRef} />
          <div className='about__screen__info'>
            <p>ABOUT ME</p>
            <div className='about__screen__square'></div>
          </div>
          <div id='info-trigger' ref={infoTriggerRef}></div>
        </div>
        <div className='about__info'>
          <div id='screen-trigger' ref={screenTriggerRef}></div>
          <div className='about__info__container' ref={aboutInfoRef}>
            <div className='about__info__text left'>
              <p>I create web applications using React and JSES6. Always care about clear code, cool design, responsiveness and user experience.</p>
              <img src={process.env.PUBLIC_URL + '/assets/images/overlay.png'}/>
            </div>
            <div className='about__info__header'>
              <img src={process.env.PUBLIC_URL + '/assets/images/hand.png'} alt='metal hand'/>
              <p>ABOUT</p>
            </div>
            <div className='about__info__text right'>
              <p>My adventure with programming began about a year ago. Over time, it turned into a real passion. I love writing code and I strive to be able to devote as much time to it as possible.</p>
              <img src={process.env.PUBLIC_URL + '/assets/images/overlay.png'}/>
            </div>
            <div className='discs__trigger'></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
