import { Container, Row, Col } from 'reactstrap'

function MainNews(){
  const url = window.location.origin; 
  return (
    <div className="main-news">
      <Container>
        <Row>
          <Col lg="9">
            <Row>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-1.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-2.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-3.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-4.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-5.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-1.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-2.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-3.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="mn-img">
                  <img src={url + "/assets/img/news-350x223-4.jpg"} />
                  <div className="mn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <div className="col-lg-3">
            <div className="mn-list">
              <h2>Read More</h2>
              <ul>
                <li><a href="">Lorem ipsum dolor sit amet</a></li>
                <li><a href="">Pellentesque tincidunt enim libero</a></li>
                <li><a href="">Morbi id finibus diam vel pretium enim</a></li>
                <li><a href="">Duis semper sapien in eros euismod sodales</a></li>
                <li><a href="">Vestibulum cursus lorem nibh</a></li>
                <li><a href="">Morbi ullamcorper vulputate metus non eleifend</a></li>
                <li><a href="">Etiam vitae elit felis sit amet</a></li>
                <li><a href="">Nullam congue massa vitae quam</a></li>
                <li><a href="">Proin sed ante rutrum</a></li>
                <li><a href="">Curabitur vel lectus</a></li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainNews;