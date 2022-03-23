import { Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

function NavbarMenu() {
  return (
    <div className="nav-bar">
      <Container>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a href="#" className="navbar-brand">MENU</a>
              <Button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon"></span>
              </Button>

              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div className="navbar-nav mr-auto">
                      <Link to="/" className="nav-item nav-link" >Trang chủ</Link>
                      <div className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Thể loại</a>
                          <div className="dropdown-menu">
                              <a href="#" className="dropdown-item">Sub Item 1</a>
                              <a href="#" className="dropdown-item">Sub Item 2</a>
                          </div>
                      </div>
                      <Link to="/single-page" className="nav-item nav-link">Single Page</Link>
                      {/*<a href="contact.html" className="nav-item nav-link">Contact Us</a> */}
                  </div>
                  <div className="navbar-nav ml-auto">
                  <div className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">longnguyen</a>
                          <div className="dropdown-menu">
                              <a href="#" className="dropdown-item">Thông tin</a>
                              <a href="#" className="dropdown-item">Đăng xuất</a>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </Container>
  </div>
  );
}

export default NavbarMenu;