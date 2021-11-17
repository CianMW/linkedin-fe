import { Col } from "react-bootstrap"

const ProfileDashboard = ({user}) =>{

    return(
        <>
        <Col
                  md={12}
                  className="mt-2 section-container"
                  id="dashboard-container"
                  style={{ width: "auto" }}
                >
                  <section className="col-12" id="dashboard">
                    <div className="info-container">
                      <div className="text-left">
                        <h3 className="dashboard-title">Your Dashboard</h3>
                        <p className="text-muted dashboard-p">
                          <em>private to you</em>
                        </p>
                      </div>
                      <div className="section-container p-0 d-flex justify-content-between">
                        <a className="dashboard-data1 pymk-a">
                          <span className=" d-flex d-inline-block dashboard-figure">
                            46
                          </span>
                          <span className="d-flex text-dark d-inline-block">
                            Who viewed your profile
                          </span>
                        </a>
                        <a className="dashboard-data pymk-a">
                          <span className=" d-flex d-inline-block dashboard-figure">
                            146
                          </span>
                          <span className="d-flex text-dark d-inline-block">
                            Post views
                          </span>
                        </a>
                        <a className="dashboard-data pymk-a">
                          <span className="d-flex d-inline-block dashboard-figure">
                            0
                          </span>
                          <span className="d-flex text-dark d-inline-block">
                            Search appearances
                          </span>
                        </a>
                      </div>
                      <div
                        className="section-container p-0 mt-3 mb-4 list-group list-group-flush"
                        id="dashboard-options"
                      >
                        <a className="d-flex justify-content-left align-items-center list-group-item pymk-a">
                          <i class="text-muted mr-2 mb-6 bi bi-people-fill"></i>
                          <a className="d-flex-column text-dark d-inline-block m-0 ">
                            <h6 className="dashboard-h6 m-0">
                              Creator Mode:{" "}
                              <span className="text-muted ">off</span>
                            </h6>
                            <p className="text-muted mb-0">
                              Grow your audience and get discovered by
                              highlighting content on your profile.
                            </p>
                          </a>
                        </a>
                        <a className="d-flex justify-content-left align-items-center list-group-item pymk-a ">
                          <i class="text-muted mr-2 mb-6 bi bi-people-fill"></i>
                          <a className="d-flex-column text-dark d-inline-block m-0 ">
                            <h6 className="dashboard-h6 m-0">
                              Manage Connections
                            </h6>
                            <p className="text-muted mb-0">
                              Manage your connections, events and iterests.
                            </p>
                          </a>
                        </a>
                        <a className="d-flex justify-content-left align-items-center list-group-item pymk-a ">
                          <i class="text-muted mr-2 mb-6 bi bi-cash"></i>
                          <a className=" d-flex-column text-dark d-inline-block m-0 ">
                            <h6 className="dashboard-h6 m-0">
                              Salary Insights
                            </h6>
                            <p className="text-muted mb-0">
                              See how your salary compares to others in the
                              community.
                            </p>
                          </a>
                        </a>
                        <a className="d-flex justify-content-left align-items-center list-group-item pymk-a ">
                          <i class="text-muted mr-2 mb-6 bi bi-bookmark-fill"></i>
                          <a className="d-flex-column text-dark d-inline-block m-0 ">
                            <h6 className="dashboard-h6 m-0">My Items</h6>
                            <p className="text-muted mb-0">
                              Keep track of your jobs courses and articles.
                            </p>
                          </a>
                        </a>
                      </div>
                    </div>
                  </section>
                </Col>
        </>
    )
}

export default ProfileDashboard