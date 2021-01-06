import '../styles/components/Navbar.scss';

import Logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <img src={Logo} alt="Logo"/>
      <a href="home" className="logo-text">DS Delivery</a>
    </nav>
  );
}

export default Navbar;
