import Slider from "react-slick";
import { Row } from "reactstrap";

function RelatedBlogDetail() {
  const url = window.location.origin;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="sn-related">
      <h2>Related News</h2>

      <Slider {...settings} className="sn-slider">
        <div className="sn-img padding-img">
          <img src={url + "/assets/img/news-350x223-1.jpg"} />
          <div className="sn-title">
            <a href="">Interdum et fames ac ante</a>
          </div>
        </div>
        <div className="sn-img padding-img">
          <img src={url + "/assets/img/news-350x223-2.jpg"} />
          <div className="sn-title">
            <a href="">Interdum et fames ac ante</a>
          </div>
        </div>
        <div className="sn-img padding-img">
          <img src={url + "/assets/img/news-350x223-3.jpg"} />
          <div className="sn-title">
            <a href="">Interdum et fames ac ante</a>
          </div>
        </div>
        <div className="sn-img padding-img">
          <img src={url + "/assets/img/news-350x223-4.jpg"} />
          <div className="sn-title">
            <a href="">Interdum et fames ac ante</a>
          </div>
        </div>
      </Slider>
    </div >
  );
}
export default RelatedBlogDetail; 