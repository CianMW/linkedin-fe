import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBarSm from "./SideBarSm/SideBarSm";
import SideBarRight from "./RightSideBar/SideBarRight";
//import MainFeedSection from "./MainFeed/MainFeedSection";
import { useState, useEffect } from "react";
import { fetchInfo, me, fetchData } from "../../lib";
import { useParams } from "react-router-dom";
//import SearchFilter from "./MainFeed/SearchFeed/SearchFilter";
 
const Home = () => {
  const [fetchType, setFetchType] = useState("")
  const [query, setQuery] = useState("") 
  const [data, setData] = useState(null);
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
const params = useParams();
console.log("HERE ARE THE SEARCH PARAMS", params)
let splitParams = params.id.split("-")
console.log("HERE ARE THE SEARCH PARAMS", splitParams)


useEffect(() => {
  setFetchType(splitParams[0])
  setQuery(splitParams[1])
;
}, [splitParams]);
console.log("SEARCH PARAMS AFTER SETTING",query, fetchType)
const url = `https://striveschool-api.herokuapp.com/api/${fetchType}/`

useEffect(() => {
  const fetchData = async () => {
    const newData = await fetchInfo(url);
   await setData(newData)
  
  };
  fetchData();
}, [fetchType]);

useEffect(() => {
  console.log("THIS IS THE INFO",data)
  }
, [data]);

  // useEffect(() => {
  //   const fetchQuery = async (fetchType) => {
  //     ;
  //     console.log("This is the url", url)
  //     const data = await fetchInfo(url);
  //     await console.log("MORBID", data );
  //     setInfo(data);
  //   };
  //   fetchQuery();
  // }, [setFetchType]);
  // useEffect(() => {
  //   const fetchUser = async (id) => {
  //     const url = `https://striveschool-api.herokuapp.com/api/profile/${me}`;
  //     const data = await fetchInfo(url);
  //     console.log({ data });
  //     setUser(data);
  //   };
  //   fetchUser();
  // }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
{/*----------------------- SideBarSm Section -----------------------*/}
          <Col md={3} >
              <SideBarSm user={user} />
          </Col>
{/*----------------------- Main Feed Section -----------------------*/}
          <Col md={6}>
             {/* {info !== null ? (<SearchFilter data={data} searchQuery={query} fetchType={fetchType} />) : (<></>)} */}
             {data && data !== "undefined" && data !== null ? (<>
        { fetchType === "profile" ? ( data.filter((b) => (b.name.toLowerCase()).includes(query)).map((person) => (
            <li className="d-flex pymk-li" key={person.id}>
              <div class="d-flex-column align-items-center">
                <Link to={"/profile/" + person._id}>
                  <a className="d-flex pymk-a">
                    <img
                      className="roundpic"
                      src={person.image}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                    <div class="ml-2">
                      <h3 className="text-dark m-0 text-left pymkh6p">
                        <strong>{person.name}</strong>{" "}
                        <strong>{person.surname}</strong>
                      </h3>
                      <p className="text-muted mb-0 text-left  pymkh6p">
                        {person.title}
                      </p>
                    </div>
                  </a>
                </Link>
                <div className="mb-2  pymkdiv">
                  <button class="btn btn-primary pymkbtn text-muted ">
                    <span className="pymkbtnspan">Message</span>
                  </button>
                </div>
              </div>
            </li>
          ))) : (data.filter(b => (b.text.includes(query))).map((person) => (
            <li className="d-flex pymk-li" key={person.user.id}>
              <div class="d-flex-column align-items-center">
                <Link to={"/profile/" + person.user._id}>
                  <a className="d-flex pymk-a">
                    <img
                      className="roundpic"
                      src={person.user.image}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                    <div class="ml-2">
                      <h3 className="text-dark m-0 text-left pymkh6p">
                        <strong>{person.user.name}</strong>{" "}
                        <strong>{person.user.surname}</strong>
                      </h3>
                      <p className="text-muted mb-0 text-left  pymkh6p">
                        {person.user.title}
                      </p>
                    </div>
                  </a>
                </Link>
                <div className="mb-2  pymkdiv">
                  <button class="btn btn-primary pymkbtn text-muted ">
                    <span className="pymkbtnspan">Message</span>
                  </button>
                </div>
              </div>
            </li>
          ))) }</>) : (<></>)}            
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