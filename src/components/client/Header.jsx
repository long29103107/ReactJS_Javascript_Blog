import { Container, Row, Col } from 'reactstrap';
import { LOGO } from 'contants/image';

function Header() {
  return (
    <header>
      <div className='top-bar'>
        <Container>
          <Row>
            <Col md="6">
              <div className='tb-contact'>
                <p>
                  <i className='fas fa-envelope'></i>info@mail.com
                </p>
                <p>
                  <i className='fas fa-phone-alt'></i>+012 345 6789
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className='tb-menu'>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-facebook-f"></i></a>
                <a href=""><i className="fab fa-linkedin-in"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='brand'>
        <Container>
          <Row className='align-items-center'>
            <Col lg="3" md="4">
              <div className='b-logo'>
                <a href='index.html'>
                  <img src={LOGO} alt='Logo' />
                </a>
              </div>
            </Col>
            <Col lg="6" md="4"></Col>
            <Col lg="3" md="4">
              <div className='b-search'>
                <input type='text' placeholder='Tìm kiếm' />
                <button>
                  <i className='fa fa-search'></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
