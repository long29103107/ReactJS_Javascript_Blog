import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";

function TopNews() {
  const url = window.location.origin;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="top-news">
      <Container>
        <Row>
          <Col md="6" className="tn-left">
            <Slider {...settings}>
              <div className="tn-img">
                  <img src={ url + "/assets/img/news-450x350-1.jpg" } />
                  <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                  </div>
              </div>
              <div className="tn-img">
                  <img src={ url + "/assets/img/news-450x350-2.jpg" } />
                  <div className="tn-title">
                      <a  href="">Integer hendrerit elit eget purus sodales maximus</a>
                  </div>
              </div>
            </Slider>
          </Col>

          <Col md="6" className="tn-right">
            <Row>
              <Col md="6">
                <div className="tn-img">
                  <img src={url + "/assets/img/news-350x223-1.jpg"} />
                  <div className="tn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="tn-img">
                  <img src={url + "/assets/img/news-350x223-2.jpg"} />
                  <div className="tn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="tn-img">
                  <img src={url + "/assets/img/news-350x223-3.jpg"} />
                  <div className="tn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="tn-img">
                  <img src={url + "/assets/img/news-350x223-4.jpg"} />
                  <div className="tn-title">
                    <a href="">Lorem ipsum dolor sit</a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default TopNews;