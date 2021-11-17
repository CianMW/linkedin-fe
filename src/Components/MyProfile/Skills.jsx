import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = ({identification}) => {
  return (
    <div id="skills">

      <Row className="mb-3">
        <Col className="d-flex justify-content-between">
          <h5 > Featured Skills & Endorsements</h5>
          {identification === "me" ? (<div>
            <button className="profile-button">
            <span className="mr-3">
            Add a new skill
            </span>
            </button>
            <button className="profile-button pencil-button"><i class="bi bi-pencil"></i></button>
          </div>) : (<></>)}
          
        </Col>
      </Row>
      <Row>
        <Col className="text-left pl-5">
          <span className=" bg-light rounded-pill p-2"> JavaScript 100% </span>
        </Col>
        <Col>
          <p>
            John Doe and 3 others connections have given endorsements for this
            skill
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-left pl-5">
          <span className=" bg-light rounded-pill p-2"> HTML 100%</span>
        </Col>
        <Col>
          <p>
            John Doe and 3 others connections have given endorsements for this
            skill
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-left pl-5">
          <span className=" bg-light rounded-pill p-2"> CSS 200%</span>
        </Col>
        <Col>
          <p>
            John Doe and 3 others connections have given endorsements for this
            skill
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p className="text-center">
            See 1000 more skills
            <img
              src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png"
              width="20"
            />
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
