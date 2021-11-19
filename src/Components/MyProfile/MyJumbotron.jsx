import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileSettings from "./ProfileSettings";
import { useState } from "react";
import dotenv from "dotenv/config"

const MyJumbotron = ({ identification, user, setRefresh, refresh, currentUser }) => {
  console.log("WTF HAHAHAH", user);
  return (
    <>
      <Jumbotron
      style={{backgroundImage: `url(${user.backgroundImage})`}}
        fluid
        className="rounded-lg bg-white p-0"
        id="jumbotron-banner"
      >
        <Row>
          <img
            id="profile-pic"
            src={user.image}
            alt="ProfilePicture"
            width="130"
            height="130"
          />
        </Row>
        <Row className="p-2" style={{ marginTop: "250px" }}>
          <Col className="text-left ">
            <h3 className="nameHeader">{user.name} {user.surname}</h3>
            <h6 className="mb-0">{user.title}</h6>
            <p className="mb-1">{user.area}</p>
            <p className="mb-0">{user.bio}</p>
            <br />
            <p>
              <Button variant="primary" className="jumbobtn-open-to">
                Open to
              </Button>
              <Button variant="white" className="jumbobtn ml-2">
                Add section
              </Button>
              <Button variant="white" className="jumbobtn ml-2">
                More
              </Button>
            </p>
            {identification === currentUser._id ? (
              <div className="opened-to-work text-left p-2">
                <div className="mb-0">
                  <b className="text-dark jumbo-a">
                    Show recruiters you’re open to work
                  </b>
                  <br />
                  <span className="text-dark jumbo-a">
                    you control who sees this
                  </span>
                  <br />
                  <a
                    href=""
                    style={{ color: "rgb(33, 93, 172)", cursor: "pointer" }}
                  >
                    Get started
                  </a>
                </div>
              </div>
            ) : (
              <></>
            )}
          </Col>
          <Col className=" d-flex-row text-right justify-content-right">
            {identification === currentUser._id ? (
              // this renders a "pencil button". when clicked it calls a modal to edit the user 
              <ProfileSettings
                user={user}
                setRefresh={setRefresh}
                refresh={refresh}
              />
            ) : (
              <></>
            )}
            <div className="d-flex eduandexp">
            <div className=" mt-1 mr-5 d-flex-row align-items-center">
              <img
                className="mr-2"
                src="https://strive.school/favicon.ico"
                width="25"
              />
              <b> Strive School</b>
            </div>
            <div className=" mt-1 mr-5 d-flex-row align-items-center">
              <img
                className="mr-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P8Bkt8I5AyDwCNPCaueTGsgvn7xYOpdyT7wapupWYEVGcUqmBrJzAqHQL-3Jy3sND2k&usqp=CAU"
                width="25"
              />
              <b>Amazon</b>
            </div>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default MyJumbotron;
