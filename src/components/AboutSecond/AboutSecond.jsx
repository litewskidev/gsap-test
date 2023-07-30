import { Linear, gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutSecond.scss';
gsap.registerPlugin(ScrollTrigger);

const AboutSecond = () => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    const qrCode = qrCodeRef.current;

    gsap.fromTo(qrCode, {y: "200%", opacity: 0}, {y: 0, opacity: 1, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: qrCode,
        scrub: true,
        start: "top 95%",
        end: "top 75%",
        ease:Linear.easeNone
      }
    });
  }, []);

  return(
    <div id='about-second' className='about__second__wrapper'>
      <div className='about__second__info'>
        <p>I create web applications using React and JSES6. Always care about clear code, cool design, responsiveness and user experience.</p>
        <div className='about__second__qr' ref={qrCodeRef}>
          <img src={process.env.PUBLIC_URL + '/assets/icons/githubqr.svg'} alt='github'/>
          <img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} alt='old overlay'/>
        </div>
      </div>
      <div className='about__second__image'>
        <img src={process.env.PUBLIC_URL + '/assets/images/persona1920.webp'} alt='persona art'/>
        <img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} alt='old overlay' />
      </div>
      <div className='about__second__overlay'>
        <a href='https://github.com/litewskidev'><img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} alt='old overlay' /></a>
      </div>
    </div>
  )
};

export default AboutSecond;
