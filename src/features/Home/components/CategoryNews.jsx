import { Col } from 'reactstrap';
import Slider from "react-slick";

function CategoryNews() {
  const url = window.location.origin;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Col md="6">
      <h2>Sports</h2>
      <Slider {...settings}>
        <div className="cn-img">
          <img src={url + "/assets/img/news-350x223-1.jpg"} />
          <div className="cn-title">
            <a href="">Lorem ipsum dolor sit</a>
          </div>
        </div>
        <div className="cn-img">
          <img src={url + "/assets/img/news-350x223-2.jpg"} />
          <div className="cn-title">
            <a href="">Lorem ipsum dolor sit</a>
          </div>
        </div>
        <div className="cn-img">
          <img src={url + "/assets/img/news-350x223-3.jpg"} />
          <div className="cn-title">
            <a href="">Lorem ipsum dolor sit</a>
          </div>
        </div>
      </Slider>
    </Col>
  );
}

export default CategoryNews;