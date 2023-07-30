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
  const discsTriggerRef = useRef(null);
  const aboutInfoHeaderRef = useRef(null);
  const textInfoLeftRef = useRef(null);
  const textInfoRightRef = useRef(null);
  const screenOffRef = useRef(null);
  const screenInfoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const img = aboutImageRef.current;
    const screen = aboutScreenRef.current;
    const imgTrigger = imageTriggerRef.current;
    const infoTrigger = infoTriggerRef.current;
    const screenTrigger = screenTriggerRef.current;
    const discsTrigger = discsTriggerRef.current;
    const infoHeader = aboutInfoHeaderRef.current;
    const textInfoLeft = textInfoLeftRef.current;
    const textInfoRight = textInfoRightRef.current;
    const screenOff = screenOffRef.current;
    const screenInfo = screenInfoRef.current;

    tl.to(screen, {ease:Linear.easeNone,
      scrollTrigger: {
        trigger: imgTrigger,
        scrub: true,
        markers: false,
        start: "top 80%",
        end: "top",
        toggleClass: {targets: [screenOff, screenInfo], className: "off"},
        ease:Linear.easeNone
      }
    }).fromTo(img, {scale: 1, y: 0, x: 0, rotate: 0}, {scale: 8, y: '230%', x: "10%", rotate: "15deg", ease:Linear.easeNone,
      scrollTrigger: {
        trigger: infoTrigger,
        scrub: true,
        markers: false,
        start: "top center",
        end: "top",
        ease:Linear.easeNone
      }
    }).fromTo(screen, {opacity: 1}, {opacity: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: infoTrigger,
        scrub: true,
        markers: false,
        start: "top 40%",
        end: "top",
        ease:Linear.easeNone
      }
    }).to(img, {opacity: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: screenTrigger,
        scrub: true,
        markers: false,
        start: "top 88%",
        end: "top 88%",
        ease:Linear.easeNone
      }
    }).fromTo(infoHeader, {y: -1200, opacity: 0}, {y: 0, opacity: 1, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: infoHeader,
        scrub: true,
        markers: false,
        start: "top 90%",
        end: "top",
        pin: [".about__info__text left", ".about__info__text right"],
        ease:Linear.easeNone
      }
    }).fromTo(textInfoRight, {x: "100%"}, {x: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: discsTrigger,
        start: "top bottom",
        end: "top center",
        scrub: true,
        ease:Linear.easeNone
    }
    }).fromTo(textInfoLeft, {x: "-100%"}, {x: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: discsTrigger,
        start: "top bottom",
        end: "top center",
        scrub: true,
        ease:Linear.easeNone
    }
    }, "<")
  }, []);

  return(
    <div id='about'>
      <div className='about__container'>
        <div className='about__image' ref={aboutImageRef}>
          <div id='image-trigger' ref={imageTriggerRef}></div>
          <img className='about__image__overlay' src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'}alt='old overlay' />
          <img className='about__table' src={process.env.PUBLIC_URL + '/assets/images/table2.webp'} alt='table' />
          <img className='about__monitor' src={process.env.PUBLIC_URL + '/assets/images/monitor1920p.webp'} alt='monitor' />
          <img className='about__screen__off' src={process.env.PUBLIC_URL + '/assets/images/screenOff1920.webp'} alt='screen off' ref={screenOffRef} />
          <img className='about__screen__on' src={process.env.PUBLIC_URL + '/assets/images/screen1920.webp'} alt='screen on' ref={aboutScreenRef} />
          <div className='about__screen__info' ref={screenInfoRef}>
            <p>ABOUT ME</p>
            <div className='about__screen__square'></div>
          </div>
          <div id='info-trigger' ref={infoTriggerRef}></div>
        </div>
        <div className='about__info'>
          <div id='screen-trigger' ref={screenTriggerRef}></div>
          <div className='about__info__container'>
            <div className='about__info__text left' ref={textInfoLeftRef}>
              <p>I create web applications using React and JSES6. Always care about clear code, cool design, responsiveness and user experience.</p>
              <img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} alt='old overlay'/>
            </div>
            <div className='about__info__header' ref={aboutInfoHeaderRef}>
              <img src={process.env.PUBLIC_URL + '/assets/images/hand1920.webp'} alt='metal hand'/>
              <p>ABOUT</p>
            </div>
            <div className='about__info__text right' ref={textInfoRightRef}>
              <p>My adventure with programming began about a year ago. Over time, it turned into a real passion. I love writing code and I strive to be able to devote as much time to it as possible.</p>
              <img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} alt='old overlay'/>
            </div>
            <div className='discs__trigger' ref={discsTriggerRef}></div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
