import { useState, useEffect } from "react"; 
import { fetchInfo } from "../../lib";
import { Link } from "react-router-dom";
import { Accordion, Card, Button} from "react-bootstrap";


const SecondPYMK = () => {
  const [data, setData] = useState([]);
  const [toggled, setToggled] = useState(false)
  const myUrl = `https://striveschool-api.herokuapp.com/api/profile/`;


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInfo(myUrl);
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  console.log(`hey it's me`, data);

  const secondSlicedData = data.slice(6,10)
  

  return (
      <>
      <Accordion className="flipped collapse-transition accordion-body-background" defaultActiveKey="1">
               <div className="accordion-body-background" >
                 <Accordion.Toggle as={Button} className="show-more-btn" onClick={e => setToggled(!toggled)} variant="link" style={{width: "100%"}}  eventKey="0">
                   {toggled ? <p className="flipped">Show Less <i class="bi bi-chevron-up"></i></p> : <p className="flipped">Show More <i class="bi bi-chevron-down"></i></p>}
                 </Accordion.Toggle>
                 <Accordion.Collapse eventKey="0">
                   <div style={{backgroundColor: "white"}}>
        { !data ? (
          <h1>Loading....</h1>
        ) :  <>
                   {(secondSlicedData.map(person => (
          <li className="d-flex  pymk-li-second" key={person.id}>

            <div class=" righted d-flex-column align-items-center">
          <Link to={"/user/" + person._id}>
            <a className="d-flex pymk-a">

            <img className="roundpic" src={person.image} alt=""  width="50px" height="50px"/>
          <div class="ml-2">
          <h3 className="text-dark m-0 text-left pymkh6p"><strong>{person.name}</strong> <strong>{person.surname}</strong></h3>
          <p className="text-muted mb-0 text-left  pymkh6p">{person.title}</p>
          </div>
            </a></Link>
          <div className="mb-2  pymkdiv-second">
          <button class="btn btn-primary pymkbtn-second text-muted  "><span className="pymkbtnspan">Message</span></button>
          </div>
          </div>
          </li>
        ))
          
                   )} </>}
            </div>
          </Accordion.Collapse>
               </div>
             </Accordion>
        
        

      </>
  );
};

export default SecondPYMK;
