import logo from './logo.svg';
import './App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NavbarMenu from 'components/NavbarMenu';
import Home from 'features/Home';
import Detail from 'pages/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavbarMenu />

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/single-page" element={<Detail />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
