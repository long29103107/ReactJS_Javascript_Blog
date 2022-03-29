import { Outlet } from 'react-router-dom';
import Sidebar from 'components/admin/Sidebar';
import Header from 'components/admin/Header';
import Script from 'components/admin/Script';
import 'assets/admin/css/nucleo-icons.css';
import 'assets/admin/css/nucleo-svg.css';
import 'assets/admin/css/soft-ui-dashboard.css?v=1.0.3';
import 'https://kit.fontawesome.com/42d5adcbca.js';
import useScript from 'hooks/useScript';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Line } from "react-chartjs-2";

function LayoutAdmin() {
  useScript(window.location.origin + "/assets/admin/js/core/popper.min.js" );
  useScript(window.location.origin + "/assets/admin/js/core/bootstrap.min.js" );
  useScript(window.location.origin + "/assets/admin/js/plugins/perfect-scrollbar.min.js" );
  useScript(window.location.origin + "/assets/admin/js/plugins/smooth-scrollbar.min.js" );
  useScript(window.location.origin + "/assets/admin/js/plugins/chartjs.min.js" );
  useScript("https://buttons.github.io/buttons.js" );
  useScript(window.location.origin + "/assets/admin/js/soft-ui-dashboard.js?v=1.0.3");
  
  return (
    <div id="sidebar" className="g-sidenav-show  bg-gray-100">
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutAdmin;