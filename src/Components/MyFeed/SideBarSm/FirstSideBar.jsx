import {
  Jumbotron,
  Container,
  Row,
  Col,
  Accordion,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const FirstSideBar = ({ user }) => {
  return (
    <div className="row mb-0">
      <Container>
        <Jumbotron id="SideBarHeader" fluid className="jumboSidebar pb-1 pt-4">
          <Row className="justify-content-center SideBarSm-row ">
            <Col>
              <img
                className="SideBarImg"
                id="profile-pic"
                src={user.image}
                alt="ProfilePicture"
                width="80"
                height="80"
              />
            </Col>
          </Row>
          <Row className=" rowborder " style={{ marginTop: "96px" }}>
            <Col className="text-left ">
              <div>
                <Link
                  to={"/profile/me"}
                  className="text-center text-dark d-block"
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  {user.surname} <br /> {user.name}
                </Link>
              </div>
              <p className="SideBarSm-p text-center text-muted mt-0">
                {user.bio}
              </p>
            </Col>
          </Row>
          <hr className="SideBarSm-Hr" />
          <Row className=" rowborder " style={{ marginTop: "6px" }}>
            <Col className="text-left ">
              <div>
                <Link
                  to={"/profile/me"}
                  className="text-center text-dark d-block text-decoration-none"
                >
                  <div className="d-flex whoviewied-flex wvmpDiv">
                    <h3 className="SideBarSm-h3 text-center text-muted mt-1">
                      Who viewed your profile
                    </h3>
                    <h3 className="SideBarSm-h3 text-center text-primary mt-1">
                      46
                    </h3>
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  to={"/profile/me"}
                  className="text-center text-dark d-block text-decoration-none"
                >
                  <div className="d-flex whoviewied-flex wvmpDiv">
                    <h3 className="SideBarSm-h3 text-center text-muted mt-1">
                      Who viewed your post
                    </h3>
                    <h3 className="SideBarSm-h3 text-center text-primary mt-1">
                      146
                    </h3>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
          <hr className="SideBarSm-Hr" />
          <Row className=" rowborder " style={{ marginTop: "6px" }}>
            <div className="col">
              <Link
                to={"/profile/me"}
                className="text-center text-dark d-block text-decoration-none wvmpDiv"
              >
                <div className="">
                  <span className="SideBarSm-h3 text-muted d-block mb-0" style={{fontSize: "12px", fontWeight: "400",}}>
                    Access exclusive tools & highlight
                  </span>
                  <div className="d-flex justify-content-left align-items-center">
                    <svg
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={17}
                      height={17}
                      viewBox="0 0 172 172"
                      style={{ fill: "#F1C40F" }}
                    >
                      <g
                        fill="none"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth={1}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit={10}
                        strokeDasharray
                        strokeDashoffset={0}
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{ mixBlendMode: "normal" }}
                      >
                        <path d="M0,172v-172h172v172z" fill="none" />
                        <g fill="#facd0d">
                          <path d="M43,28.66667c-15.83117,0 -28.66667,12.8355 -28.66667,28.66667v57.33333c0,15.83117 12.8355,28.66667 28.66667,28.66667h86c15.83117,0 28.66667,-12.8355 28.66667,-28.66667v-57.33333c0,-15.83117 -12.8355,-28.66667 -28.66667,-28.66667z" />
                        </g>
                      </g>
                    </svg>

                    <h3 className="SideBarSm-h3 text-center pt-1 text-dark mt-1">
                      Try Premium for free
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </Row>
          <hr className="SideBarSm-Hr" />
          <Row className=" rowborder " style={{ marginTop: "6px" }}>
            <div className="col">
              <Link
                to={"/profile/me"}
                className="text-center text-dark d-block text-decoration-none wvmpDiv"
              >
                <div className="d-flex">
                  <i class="bi bi-bookmark-fill mr-2"></i>
                  <h3 className="SideBarSm-h3 text-center text-muted mt-1">
                    My items
                  </h3>
                </div>
              </Link>
            </div>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default FirstSideBar;
