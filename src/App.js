
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/page1" element={<Page1 />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
