import { Linear, gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.scss';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeImgRef = useRef(null);
  const homePatternRef = useRef(null);
  const homeInfoRef = useRef(null);
  const homeInfoBoxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const pattern = homePatternRef.current;
    const img = homeImgRef.current;
    const infoBox = homeInfoBoxRef.current;
    const info = homeInfoRef.current;

    //  ENTER ANIME
    tl.fromTo(pattern, {y: "-150%"}, {y: 0, duration: 1.5, ease:Linear.easeNone})
    .fromTo(img, {x: "100%", opacity: 0}, {x: 0, opacity: 1, duration: 1.5, ease:Linear.easeNone})
    .fromTo(info, {y: "300%", opacity: 0}, {y: 0, opacity: 1, duration: 1.5, ease:Linear.easeNone}, "<")

    //  EXIT ANIME

    gsap.fromTo(img, {y: 0}, {y: '100%', ease:Linear.easeNone,
      scrollTrigger: {
        trigger: "#about",
        scrub: true,
        ease:Linear.easeNone
    }})
  }, []);

  return(
    <div id='home' className='home__wrapper'>
      <div className='home__container'>
        <div className='home__left'>
          <img src={process.env.PUBLIC_URL + '/assets/photos/photo2.webp'} ref={homeImgRef} alt='main avatar'/>
        </div>
        <div className='home__pattern' ref={homePatternRef}></div>
        <div className='home__right' ref={homeInfoBoxRef}>
          <h1 ref={homeInfoRef}>HI<br />I'M<br />ADR<br />IAN</h1>
        </div>
      </div>
    </div>
  )
};

export default Home;
