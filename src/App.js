import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import BaseRouter from './routes';
import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <div className="App">
        <Router>
          <MainLayout>
            <BaseRouter />
          </MainLayout>
        </Router>
    </div>
  );
}

export default App;
