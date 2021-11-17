import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBarSm from "./SideBarSm/SideBarSm";
import SideBarRight from "./RightSideBar/SideBarRight";
import MainFeedSection from "./MainFeed/MainFeedSection";
import { useState, useEffect } from "react";
import { fetchInfo, me } from "../../lib";
// import { useParams } from "react-router-dom";

const Home = () => {
  // const params = useParams();

  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUser = async (id) => {
      const url = process.env.REACT_APP_URL +`users/${id}`;
      const data = await fetchInfo(url);
      console.log({ data });
      await setUser({...data.foundUser});
    };
    fetchUser(process.env.REACT_APP_CURRENTUSER);
  }, []);

  return (
    <>
      <div className="mt-3 ad-container">
        <a
          href="https://www.talent.io/p/en-de/home?utm_source=linkedin&utm_medium=cpc&utm_campaign=%5BLI%5D-DE-Germany-Candidates-Frontend-TA&li_fat_id=713b0a02-5b8e-4676-9f0c-592df8135a78"
          className="ad text-center text-dark"
        >
          <a className="text-primary">Frontend Entwickle</a>
          🚨 7000 Unternehmen suchen auf talent.io neue Mitarbeiter·innen. €60k
          to €120k{" "}
        </a>
        <span className="ml-2">
          Ad <span className="ad-span">...</span>
        </span>
      </div>
      <Container className="mt-3">
        <Row>
          {/*----------------------- SideBarSm Section -----------------------*/}
          <Col md={3}>
            <SideBarSm user={user} />
          </Col>
          {/*----------------------- Main Feed Section -----------------------*/}
          <Col md={6}>
            <MainFeedSection user={user} />
          </Col>
          {/*----------------------- Sidebar-Right Section -------------------*/}
          <Col className="p-0" md={3}>
            <SideBarRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Home);
