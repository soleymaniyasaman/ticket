import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './navigation/router-config';

function App() {
  return (
    <BrowserRouter>

      <RouterConfig />

    </BrowserRouter>
  );
}

export default App;
