import { 
  Row,
  Card, 
  Col, 
  CardBody
} from 'reactstrap';

function InfoOverview() {
  const url = window.location.origin;
  
  return (
    <Row className="mt-4">
      <Col lg="7" className="mb-lg-0 mb-4">
        <Card>
          <CardBody className="p-3">
            <Row>
              <Col lg="6">
                <div className="d-flex flex-column h-100">
                  <p className="mb-1 pt-2 text-bold">Built by developers</p>
                  <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
                  <p className="mb-5">
                    From colors, cards, typography to complex elements, you
                    will find the full documentation.
                  </p>
                  <span
                    className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    
                  >
                    Read More
                    <i
                      className="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </Col>
              <Col lg="5" className="ms-auto text-center mt-5 mt-lg-0">
                <div className="bg-gradient-primary border-radius-lg h-100">
                  <img
                    src={url + "/assets/admin/img/shapes/waves-white.svg"}
                    className="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                    alt="waves"
                  />
                  <div className="position-relative d-flex align-items-center justify-content-center h-100">
                    <img
                      className="w-100 position-relative z-index-2 pt-4"
                      src={
                        url +
                        "/assets/admin/img/illustrations/rocket-white.png"
                      }
                      alt="rocket"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col lg="5">
        <Card className="h-100 p-3">
          <div
            className="overflow-hidden position-relative border-radius-lg bg-cover h-100"
            style={{ backgroundImage: `url("../assets/img/ivancik.jpg")` }}
          >
            <span className="mask bg-gradient-dark"></span>
            <CardBody className="position-relative z-index-1 d-flex flex-column h-100 p-3">
              <h5 className="text-white font-weight-bolder mb-4 pt-2">
                Work with the rockets
              </h5>
              <p className="text-white">
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </p>
              <span
                className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto"
              >
                Read More
                <i
                  className="fas fa-arrow-right text-sm ms-1"
                  aria-hidden="true"
                ></i>
              </span>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
export default InfoOverview;