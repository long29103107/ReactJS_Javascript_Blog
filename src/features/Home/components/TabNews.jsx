import { Container, Row, Col } from 'reactstrap';

function TabNews() {
  const url = window.location.origin;
  return (
    <div className="tab-news">
            <Container>
                <Row>
                    <Col md="6">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#featured">Featured News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#popular">Popular News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#latest">Latest News</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="featured" className="container tab-pane active">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-1.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-2.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-3.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="popular" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-4.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-5.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-1.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="latest" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-2.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-3.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-4.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    
                    <Col md="6">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="pill" href="#m-viewed">Most Viewed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#m-read">Most Read</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="pill" href="#m-recent">Most Recent</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="m-viewed" className="container tab-pane active">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-5.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-4.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-3.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="m-read" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-2.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-1.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-3.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                            <div id="m-recent" className="container tab-pane fade">
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-4.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-5.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                                <div className="tn-news">
                                    <div className="tn-img">
                                        <img src={ url + "/assets/img/news-350x223-1.jpg"} />
                                    </div>
                                    <div className="tn-title">
                                        <a href="">Lorem ipsum dolor sit amet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default TabNews;