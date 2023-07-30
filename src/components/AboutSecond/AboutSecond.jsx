import './AboutSecond.scss';

const AboutSecond = () => {
  return (
    <div id='about-second' className='about__second__wrapper'>
      <div className='about__second__info'>
        <p>I create web applications using React and JSES6. Always care about clear code, cool design, responsiveness and user experience.</p>
        <div className='about__second__qr'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/githubqr.svg'}/>
          <img src={process.env.PUBLIC_URL + '/assets/images/overlay.png'}/>
        </div>
      </div>
      <div className='about__second__image'>
        <img src={process.env.PUBLIC_URL + '/assets/images/persona.jpeg'}/>
        <img src={process.env.PUBLIC_URL + '/assets/images/overlay.png'}/>
      </div>
      <div className='about__second__overlay'>
        <img src={process.env.PUBLIC_URL + '/assets/images/overlay.png'}/>
      </div>
    </div>
  )
}

export default AboutSecond;
