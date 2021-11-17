import {
  Jumbotron,
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";

const SecondSideBar = () => {
  return (
    <div className="row mt-0">
      <div className="col">
        <Jumbotron fluid className="jumboSidebar pb-1 pt-4">
          <Container className="mb-0">
            <Row className="justify-content-center SideBarSm-row pb-0">
              <Accordion defaultActiveKey="0">
                <Card className="accordion">
                  <Accordion.Toggle
                    className="container-fluid show-more-button1 "
                    as={Card.Header}
                    eventKey="0"
                    style={{ width: "100%", backgroundColor: "transparent" }}
                  >
                    <div className="d-flex div-in-acc">
                      <h6 className="mr-6">Recent</h6>
                      <h6 className="ml-6 opacity">︿</h6>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div>
                    <div className="d-flex mt-1">
                        <div>
                      <img className="d-block ml-3  mr-2" src="https://img.icons8.com/fluency-systems-filled/30/000000/queue.png" width="15px"/>
                      </div>
                        <h3 className="text-muted SideBarSm-h3 wvmpDiv">
                          JavaScript
                        </h3>
                      </div>
                      <div className="d-flex">
                        <div>
                      <img className="d-block ml-3 mr-2" src="https://img.icons8.com/fluency-systems-filled/30/000000/queue.png" width="15px"/>
                      </div>
                        <h3 className="text-muted SideBarSm-h3 wvmpDiv">
                          Full-stack web developer
                        </h3>
                      </div>
                      <div className="d-flex">
                        <div>
                      <img className="d-block ml-3 mr-2" src="https://img.icons8.com/fluency-systems-filled/30/000000/queue.png" width="15px"/>
                      </div>
                        <h3 className="text-muted SideBarSm-h3 wvmpDiv">
                          Frontend developer and web...
                        </h3>
                      </div>
                      <div className="d-flex">
                        <div>
                      <img className="d-block ml-3 mr-2" src="https://img.icons8.com/fluency-systems-filled/30/000000/queue.png" width="15px"/>
                      </div>
                        <h3 className="text-muted SideBarSm-h3 wvmpDiv">
                          React Developers ReactJS...
                        </h3>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Row>

            <Row className="justify-content-center SideBarSm-row ">
              <Accordion defaultActiveKey="0" className="mt-0">
                <Card className="accordion">
                  <Accordion.Toggle
                    className="container-fluid show-more-button1 "
                    as={Card.Header}
                    eventKey="0"
                    style={{ width: "100%", backgroundColor: "transparent" }}
                  >
                    <div className="d-flex div-in-acc">
                      <a href="https://www.linkedin.com/groups/">
                        <h6 className="mr-6 follow">Group</h6>
                      </a>
                      <h6 className="mr-7 opacity">︿</h6>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <div>
                      <div>
                        <h3 className="text-muted SideBarSm-h3 wvmpDiv">
                          JavaScript
                        </h3>
                      </div>
                      <div className="d-flex">
                        <div>
                      <img className="d-block ml-3 mr-2" src="https://img.icons8.com/fluency-systems-filled/30/000000/queue.png" width="15px"/>
                      </div>
                        <h3 className="text-muted SideBarSm-h3 wvmpDiv">
                          Full-stack web developer
                        </h3>
                      </div>
                      <div className="d-flex">
                        <div>
                      <img className="d-block ml-3 mr-2" src="https://img.icons8.com/fluency-systems-filled/30/000000/queue.png" width="15px"/>
                      </div>
                        <h3 className="text-muted SideBarSm-h3 wvmpDiv">
                          Frontend developer and web...
                        </h3>
                      </div>
                      <div className="d-flex">
                        <div>
                      <img className="d-block ml-3 mr-2" src="https://img.icons8.com/fluency-systems-filled/30/000000/queue.png" width="15px"/>
                      </div>
                        <h3 className="text-muted SideBarSm-h3 wvmpDiv">
                          React Developers ReactJS...
                        </h3>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Row>

            <Row className="justify-content-center SideBarSm-row ">
              <Accordion defaultActiveKey="0">
                <Card className="accordion ">
                  <Accordion.Toggle
                    className="container-fluid show-more-button1"
                    as={Card.Header}
                    eventKey="0"
                    style={{ width: "100%", backgroundColor: "transparent" }}
                  >
                    <div className="d-flex div-in-acc">
                      <a href="https://www.linkedin.com/mynetwork/network-manager/events/">
                        <h6 className="mr-6 follow">Events</h6>
                      </a>
                      <h6 className="ml-7 opacity">
                        <i class="bi bi-plus-lg bi-css3 text-dark "></i>
                      </h6>
                    </div>
                  </Accordion.Toggle>
                </Card>
              </Accordion>
            </Row>

            <Row className="justify-content-center SideBarSm-row pb-0">
              <Accordion defaultActiveKey="0">
                <Card className="accordion">
                  <Accordion.Toggle
                    className="container-fluid show-more-button1"
                    as={Card.Header}
                    eventKey="0"
                    style={{ width: "100%", backgroundColor: "transparent" }}
                  >
                    <div className="d-flex div-in-acc">
                      <a href="https://www.linkedin.com/feed/following/?filterType=channel&focused=true">
                        <p className="mr-6 follow">Followed Hashtags</p>
                      </a>
                    </div>
                  </Accordion.Toggle>
                </Card>
              </Accordion>
            </Row>
          </Container>
          <hr className="SideBarSm-Hr mt-0" />
          <div>
            <h1
              className="text-muted"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
              }}
            >
              Discover more
            </h1>
          </div>
        </Jumbotron>
      </div>
    </div>
  );
};

export default SecondSideBar;
