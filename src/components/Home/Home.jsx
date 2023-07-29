import './Home.scss';
import { Linear, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeImgRef = useRef(null);
  const homePatternRef = useRef(null);
  const homeInfoRef = useRef(null);
  const homeConRef = useRef(null);
  const homeInfoBoxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const pattern = homePatternRef.current;
    const img = homeImgRef.current;
    const infoBox = homeInfoBoxRef.current;
    const info = homeInfoRef.current;
    const container = homeConRef.current;

    //  START
    tl.fromTo(pattern, {y: -1500}, {y: 0, duration: 1.5, ease:Linear.easeNone})
    .fromTo(img, {x: "100%", opacity: 0}, {x: 0, opacity: 1, duration: 1.5, ease:Linear.easeNone})
    .fromTo(info, {y: "300%", opacity: 0}, {y: 0, opacity: 1, duration: 1.5, ease:Linear.easeNone}, "<")

    gsap.fromTo([infoBox, pattern], {x:0, y:0}, {x: 1500, y: 1100, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: "#about",
        scrub: true,
        markers: false,
    }})

    gsap.fromTo(img, {y:0}, {y: '70%', ease:Linear.easeNone,
      scrollTrigger: {
        trigger: "#about",
        scrub: true,
        markers: false,
    }})
  }, []);

  return(
    <div id='home' className='home__wrapper'>
      <div className='home__container' ref={homeConRef}>
        <div className='home__left'>
          <img src={process.env.PUBLIC_URL + '/assets/photos/photo1.webp'} ref={homeImgRef}/>
        </div>
        <div className='home__pattern' ref={homePatternRef}></div>
        <div className='home__right' ref={homeInfoBoxRef}>
          <h1 ref={homeInfoRef}>HI<br />I'M<br />ADRIAN</h1>
        </div>
      </div>
    </div>
  )
};

export default Home;
