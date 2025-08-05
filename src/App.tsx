import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import SignIn from './pages/signIn';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
