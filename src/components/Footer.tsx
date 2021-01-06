import '../styles/components/Footer.scss';

import { ReactComponent as YoutubeIcon } from '../images/youtube.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram.svg';

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior</p>
      <div className="footer-icons">
        <a href="https://www.youtube.com/c/DevSuperior" target="_new">
          <YoutubeIcon />
        </a>

        <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
          <LinkedInIcon />
        </a>

        <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
