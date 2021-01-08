import { ToastContainer } from 'react-toastify';

import Routes from './router';

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

function App() {

  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
