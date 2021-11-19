import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import POSTModal from "./POSTModal";
import POSTPic from "./POSTPic";



const StartAPost = ({ smShow, setSmShow, fetchFeed, token, user, currentUser}) => {

  const [pic, setPic] = useState(false);

  return (
    <div className="border mb-0 p-2 bg-white " style={{ borderRadius: "10px" }}>
      <Row className="mt-3">
        <Col md={2}>
          {" "}
          <img
            className="ml-2"
            style={{ borderRadius: "50%" }}
            src={user.image}
            alt="ProfilePicture"
            width="50"
            height="50"
          />
        </Col>
        <Col className="mr-1">
          <POSTModal
            smShow={smShow}
            setSmShow={setSmShow}
            fetchFeed={fetchFeed}
            token={token}
            currentUser={currentUser}
          />
          <Button
            onClick={() => {
              setSmShow(true);
            }}
            className="btn btn-light border-secondary main-feed-post rounded-pill py-3"
            style={{ width: "100%" }}
          >
            Start a post
          </Button>
        </Col>
      </Row>
      <Row className="mt-2 p-1">
        <Col className="act">
          <img
            src="https://static.thenounproject.com/png/541-200.png"
            width="25"
          />{" "}
          &nbsp;<span className="text-muted">Photo</span>
          <POSTPic fetchFeed={fetchFeed} pic={pic} setPic={setPic} />
        </Col>
        <Col>
          <img src="https://img.icons8.com/nolan/48/video.png" width="25" />
          &nbsp;<span className="text-muted">Video</span>
        </Col>
        <Col>
          <img
            src="https://img.icons8.com/cute-clipart/50/000000/tear-off-calendar.png"
            width="25"
          />
          &nbsp;<span className="text-muted">Event</span>
        </Col>
        <Col>
          <img
            src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-article-blogger-and-influencer-itim2101-flat-itim2101-2.png"
            width="25"
          />{" "}
          &nbsp;<span className="text-muted">Article</span>
        </Col>
      </Row>
    </div>
  );
};
export default StartAPost;
