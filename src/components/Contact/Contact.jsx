import './Contact.scss';

const Contact = () => {
  return(
    <div id='contact' className='contact__wrapper'>
      <p></p>
      <form className='contact__form'>
        <input className='contact__form__text' type='text' placeholder='NAME'></input>
        <input className='contact__form__text' type='email' placeholder='E-MAIL'></input>
        <input className='contact__form__message' type='text' placeholder='MESSAGE'></input>
        <img src={process.env.PUBLIC_URL + '/assets/test/frame1.png'}/>
        <button type='submit'>SEND</button>
      </form>
    </div>
  )
};

export default Contact;
