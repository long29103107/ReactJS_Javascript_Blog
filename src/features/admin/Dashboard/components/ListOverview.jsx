import { 
  Row,
  Card, 
  Col, 
  CardHeader, 
  CardBody, 
  Table
} from 'reactstrap';
import PropTypes from 'prop-types';

ListOverview.propTypes = {
  tableList: PropTypes.array
};

ListOverview.defaultProps = {
  tableList: [],
}

function ListOverview({ tableList }) {
  return (
    <Row className="mt-4">
      <Col lg="8" md="6" className="mb-md-0 mb-4">
        <Card>
          <CardHeader className="pb-0">
            <Row>
              <Col lg="6" xs="7">
                <h6>Projects</h6>
                <p className="text-sm mb-0">
                  <i className="fa fa-check text-info" aria-hidden="true"></i>
                  <span className="font-weight-bold ms-1">30 done</span> this
                  month
                </p>
              </Col>
              <Col lg="6" xs="5" className="my-auto text-end">
                <div className="dropdown float-lg-end pe-4">
                  <a
                    className="cursor-pointer"
                    id="dropdownTable"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v text-secondary"></i>
                  </a>
                  <ul
                    className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
                    aria-labelledby="dropdownTable"
                  >
                    <li>
                      <span
                        className="dropdown-item border-radius-md"
                      >
                        Action
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item border-radius-md"
                      >
                        Another action
                      </span>
                    </li>
                    <li>
                      <span
                        className="dropdown-item border-radius-md"
                      >
                        Something else here
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="px-0 pb-2">
            <div className="table-responsive">
              <Table className="align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Companies
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      Members
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Budget
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Completion
                    </th>
                  </tr>
                </thead>
                <tbody>{tableList}</tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4" md="6">
        <Card className="h-100">
          <CardHeader className="pb-0">
            <h6>Orders overview</h6>
            <p className="text-sm">
              <i
                className="fa fa-arrow-up text-success"
                aria-hidden="true"
              ></i>
              <span className="font-weight-bold">24%</span> this month
            </p>
          </CardHeader>
          <CardBody className="p-3">
            <div className="timeline timeline-one-side">
              <div className="timeline-block mb-3">
                <span className="timeline-step">
                  <i className="ni ni-bell-55 text-success text-gradient"></i>
                </span>
                <div className="timeline-content">
                  <h6 className="text-dark text-sm font-weight-bold mb-0">
                    $2400, Design changes
                  </h6>
                  <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    22 DEC 7:20 PM
                  </p>
                </div>
              </div>
              <div className="timeline-block mb-3">
                <span className="timeline-step">
                  <i className="ni ni-html5 text-danger text-gradient"></i>
                </span>
                <div className="timeline-content">
                  <h6 className="text-dark text-sm font-weight-bold mb-0">
                    New order #1832412
                  </h6>
                  <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    21 DEC 11 PM
                  </p>
                </div>
              </div>
              <div className="timeline-block mb-3">
                <span className="timeline-step">
                  <i className="ni ni-cart text-info text-gradient"></i>
                </span>
                <div className="timeline-content">
                  <h6 className="text-dark text-sm font-weight-bold mb-0">
                    Server payments for April
                  </h6>
                  <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    21 DEC 9:34 PM
                  </p>
                </div>
              </div>
              <div className="timeline-block mb-3">
                <span className="timeline-step">
                  <i className="ni ni-credit-card text-warning text-gradient"></i>
                </span>
                <div className="timeline-content">
                  <h6 className="text-dark text-sm font-weight-bold mb-0">
                    New card added for order #4395133
                  </h6>
                  <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    20 DEC 2:20 AM
                  </p>
                </div>
              </div>
              <div className="timeline-block mb-3">
                <span className="timeline-step">
                  <i className="ni ni-key-25 text-primary text-gradient"></i>
                </span>
                <div className="timeline-content">
                  <h6 className="text-dark text-sm font-weight-bold mb-0">
                    Unlock packages for development
                  </h6>
                  <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    18 DEC 4:54 AM
                  </p>
                </div>
              </div>
              <div className="timeline-block">
                <span className="timeline-step">
                  <i className="ni ni-money-coins text-dark text-gradient"></i>
                </span>
                <div className="timeline-content">
                  <h6 className="text-dark text-sm font-weight-bold mb-0">
                    New order #9583120
                  </h6>
                  <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">
                    17 DEC
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default ListOverview;