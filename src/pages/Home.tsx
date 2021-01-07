import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

import Main from '../images/main.svg';

import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <>
      <div id="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido <br /> que entregamos <br /> para você!!!
          </h1>

            <h3 className="home-subtitle">
              Escolha o seu pedido e em poucos minutos <br /> levaremos na sua porta
          </h3>

            <Link to="/orders" className="home-btn-order">
              FAZER PEDIDO
          </Link>
          </div>

          <img src={Main} alt="Main" className="home-image" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
