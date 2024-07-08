import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './screens/Home';
import NotFound from './screens/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div></BrowserRouter>
  );
}

export default App;
