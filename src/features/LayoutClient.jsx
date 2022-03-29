import { Outlet } from 'react-router-dom';
import Header from 'components/client/Header';
import Footer from 'components/client/Footer';
import NavbarMenu from 'components/client/NavbarMenu';
import 'assets/lib/slick/slick.css';
import 'assets/lib/slick/slick-theme.css';
import 'assets/css/style.css';
import 'https://code.jquery.com/jquery-3.4.1.min.js';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useScript from 'hooks/useScript';

function LayoutClient() {
    useScript(window.location.origin + '/assets/js/main.js');
    return (
        <>
          <Header />
          <NavbarMenu />
          <Outlet />
          <Footer />
        </>
    );
}

export default LayoutClient;