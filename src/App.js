import './App.css';
import { HashRouter } from 'react-router-dom';
import RouterConfig from './navigation/router-config';

function App() {
  return (
    <HashRouter>
      <RouterConfig />
    </HashRouter>
  );
}

export default App;
