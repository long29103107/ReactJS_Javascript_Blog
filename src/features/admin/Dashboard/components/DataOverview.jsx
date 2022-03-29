import { Row, Col, Card, CardBody} from 'reactstrap';

function DataOverview() {
  return (
    <Row className="mt-4">
      <Col xl="3" sm="6"  className="mb-xl-0 mb-4">
        <Card>
          <CardBody className="p-3">
            <Row>
              <Col xs="8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">
                    Today"s Money
                  </p>
                  <h5 className="font-weight-bolder mb-0">
                    $53,000
                    <span className="text-success text-sm font-weight-bolder">
                      +55%
                    </span>
                  </h5>
                </div>
              </Col>
              <Col xs="4" className="text-end">
                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i
                    className="ni ni-money-coins text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3" sm="6"  className="mb-xl-0 mb-4">
        <Card>
          <CardBody className="p-3">
            <Row>
              <Col xs="8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">
                    Today"s Users
                  </p>
                  <h5 className="font-weight-bolder mb-0">
                    2,300
                    <span className="text-success text-sm font-weight-bolder">
                      +3%
                    </span>
                  </h5>
                </div>
              </Col>
              <Col xs="4" className="text-end">
                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i
                    className="ni ni-world text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3" sm="6"  className="mb-xl-0 mb-4">
        <Card>
          <CardBody className="p-3">
            <Row>
              <Col xs="8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">
                    New Clients
                  </p>
                  <h5 className="font-weight-bolder mb-0">
                    +3,462
                    <span className="text-danger text-sm font-weight-bolder">
                      -2%
                    </span>
                  </h5>
                </div>
              </Col>
              <Col xs="4" className="text-end">
                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i
                    className="ni ni-paper-diploma text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3" sm="6"  className="mb-xl-0 mb-4">
        <Card>
          <CardBody className="p-3">
            <Row>
              <Col xs="8">
                <div className="numbers">
                  <p className="text-sm mb-0 text-capitalize font-weight-bold">
                    Sales
                  </p>
                  <h5 className="font-weight-bolder mb-0">
                    $103,430
                    <span className="text-success text-sm font-weight-bolder">
                      +5%
                    </span>
                  </h5>
                </div>
              </Col>
              <Col xs="4" className="text-end">
                <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                  <i
                    className="ni ni-cart text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        </Col>
    </Row>
  );
}

export default DataOverview;