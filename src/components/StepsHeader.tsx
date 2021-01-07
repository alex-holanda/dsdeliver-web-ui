import '../styles/components/StepsHeader.scss';

const StepsHeader = () => {
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title">
          SIGA AS <br /> ETAPAS
        </h1>

        <ul className="steps-items">
          <li>
            <p>
              <span className="steps-number">1</span>
            Selecione os produtos e localização.
            </p>
          </li>

          <li>
            <p>
              <span className="steps-number">2</span>
              Depois clique em <strong>"ENVIAR PEDIDO"</strong>
            </p>
          </li>
        </ul>

      </div>
    </header>
  );
}

export default StepsHeader;
