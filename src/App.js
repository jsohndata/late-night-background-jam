
import { HashRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <>
    {/* HasRouter used for GH-Pages */}
    <HashRouter>
      <Routes>
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/" element={<Page1 />} />
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </HashRouter>    
    </>
  );
}

export default App;
