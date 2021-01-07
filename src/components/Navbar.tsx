import { Link } from 'react-router-dom';

import '../styles/components/Navbar.scss';

import Logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <img src={Logo} alt="Logo"/>
      <Link to="/" className="logo-text">DS Delivery</Link>
    </nav>
  );
}

export default Navbar;
