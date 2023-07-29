import './Navbar.scss';

const Navbar = () => {
  return(
    <div className='navbar__wrapper' id='navbar'>
      <div className='navbar__logo'>
        <img src={process.env.PUBLIC_URL + '/assets/logo/terminal-solid.svg'} alt='logo'/>
      </div>
      <div className='navbar__info'>
        <div className='navbar__language__switch'>
          <div id='lang-pl' className='navbar__language__pl clickedPl'>PL</div>
          <div id='lang-eng' className='navbar__language__eng'>EN</div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
