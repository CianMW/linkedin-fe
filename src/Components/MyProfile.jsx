import { Container, Row, Col } from "react-bootstrap";
import MyJumbotron from "./MyProfile/MyJumbotron";
import DisplayExp from "./MyProfile/DisplayExp";
import Skills from "./MyProfile/Skills";
import { useState, useEffect } from "react";
import { fetchInfo } from "../lib";
import PyMk from "./MyProfile/PyMk";
import EditSettingsRightBar from "./MyProfile/EditSettingsRightBar";
import { useParams } from "react-router-dom";
import ProfileDashboard from "./MyProfile/ProfileDashboard";
import SecondPYMK from "./MyProfile/SecondPYMK";
import { areDayPropsEqual } from "@mui/lab/PickersDay/PickersDay";
import { token, me } from "../lib";
import Activity from "./Activity";
import dotenv from "dotenv/config";
import DownloadCSV from "./MyProfile/DownloadCSV";

const MyProfile = ({ currentUser }) => {
  const params = useParams();
  // let pathname = props.location.pathname;
  // console.log(pathname);
  const [user, setUser] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUser = async (id) => {
      const url = process.env.REACT_APP_URL + `users/${id}`;
      const data = await fetchInfo(url);
      console.log(`this are the users`, { data });
      if (data.foundUser._id === currentUser._id) {
        setUser(currentUser);
      } else {
        setUser({ ...data.foundUser });
      }

      // setCurrentUser({ ...data.foundUser });
    };
    fetchUser(params.id);
  }, [params.id, refresh]);

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
      {/*Main Container*/}
      <Container className="mt-3">
        <Row>
          {/*Larger central Column*/}
          <Col md={8}>
            {/*Main feed*/}
            <Container fluid>
              <Row>
                <Col md={12} className="p-0">
                  {user && (
                    <MyJumbotron
                      identification={params.id}
                      user={user}
                      setRefresh={setRefresh}
                      refresh={refresh}
                      currentUser={currentUser}
                    />
                  )}
                </Col>
                {/*Your Dashboard Section*/}

                {params.id === currentUser._id ? (
                  <ProfileDashboard user={user} />
                ) : (
                  <></>
                )}

                {/*Your Dashboard END*/}

                {/*Activity Section*/}

                <Col md={12} className="p-0">
                  <div className="section-container mt-3">
                    <div className="text-left">
                      <div className="d-flex d-inline-block justify-content-between">
                        <h4>Activity</h4>

                        {params.id === currentUser._id ? (
                          <button className="profile-button">
                            Start a post
                          </button>
                        ) : (
                          <></>
                        )}
                      </div>
                      <p className="text-muted">11 followers</p>
                    </div>
                    {user && <Activity currentUser={currentUser} user={user} />}

                    {/* <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse id libero ac est egestas tincidunt. Proin
                        nec interdum massa. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus
                      </p>
                    </div> */}
                  </div>
                </Col>
                {/*Activity Section END*/}

                {/*Exp Section*/}
                <Col md={12} className="p-0 rounded-lg">
                  <div className="section-container mt-3">
                    <div className="d-flex d-inline-block justify-content-between">
                      <h4>Experience</h4>
                    </div>
                    {params.id === currentUser._id && (
                      <div>
                        <DownloadCSV user={user} />
                      </div>
                    )}

                    <div className="position-relative">
                      <DisplayExp
                        user={user}
                        currentUser={currentUser}
                        token={token}
                        me={me}
                      />
                    </div>
                  </div>
                </Col>
                {/*Exp Section END*/}


                {/*EDUCATION Section*/}
                <Col md={12} className="p-0 rounded-lg">
                  <div className="section-container mt-3">
                    <div className="d-flex d-inline-block justify-content-between">
                      <h4>Experience</h4>
                    </div>
                    

                    <div className="position-relative">
                      <DisplayExp
                        user={user}
                        currentUser={currentUser}
                        token={token}
                        me={me}
                      />
                    </div>
                  </div>
                </Col>
                {/*EDUCATION Section END*/}

                {/*Skills section Start*/}

                <Col md={12} className="p-0">
                  <Skills identification={params.id} />
                </Col>

                {/*Skills section End*/}
              </Row>
            </Container>
          </Col>
          {/*Larger central Column END*/}

          {/*Smaller right Column start*/}
          <Col md={4}>
            <Row>
              <Container fluid>
                {/*edit section right column*/}
                {params.id === currentUser._id ? (
                  <div className="section-container pt-0 pb-0 list-group list-group-flush">
                    <EditSettingsRightBar />
                  </div>
                ): (
        
                <div className="mt-3 profile-ad list-group ">
                  <div className="list-group-item  p-0">
                    <a href="https://www.linkedin.com/jobs/?trk=consumer_jobs_global_fallback">
                      <img style={{width: "330px", height: "250px"}}
                        // src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
                        src="https://i.guim.co.uk/img/media/80b827ae951f33027e447757237874802796ae0b/768_869_5646_3613/master/5646.jpg?width=700&quality=85&auto=format&fit=max&s=7d7ed7711d0d33e7f2361536cef3146a"
                 
                      />
                     </a>
                  </div>
                 </div> 
                )
}
                {/* ad section */}

                {/*People also viewed section */}
                <div>
                  <div>
                    <div className="mt-3 section-container-viewed-list">
                      <div className="alsoViewed">
                        <h4 className="myprofileh4 pl-2 text-left">
                          People also viewed
                        </h4>
                        <div>
                          <ul className="ul">
                            {/*Insert generated content here!!*/}
                            <PyMk refresh={refresh} setRefresh={setRefresh} currentUser={currentUser}/>
                          </ul>
                        </div>
                      </div>
                      <SecondPYMK currentUser={currentUser} />
                    </div>
                  </div>
                  {/*People also viewed section END */}
                  <div>
                    <div className="mt-3 section-container-viewed-list">
                      <div className="alsoViewed">
                        <h4 className="myprofileh4 pl-2 text-left">
                          People you may know
                        </h4>
                        <div>
                          <ul className="ul">
                            {/*Insert generated content here!!*/}
                            <PyMk currentUser={currentUser} />
                          </ul>
                        </div>
                      </div>
                      <SecondPYMK currentUser={currentUser} />
                    </div>
                  </div>
                </div>
              </Container>
            </Row>
          </Col>
          {/*Smaller right Column end*/}
        </Row>
      </Container>

      {/*Main Container End*/}
    </>
  );
};

export default MyProfile;
