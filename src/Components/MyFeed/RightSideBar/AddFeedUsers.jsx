import { useState, useEffect } from "react";
import { fetchInfo } from "../../../lib";
import { Link } from "react-router-dom";

import { Accordion, Card } from "react-bootstrap";







const AddFeedUsers = (props) => {
  const [data, setData] = useState([]);
  const [randomSelection, setRandomSelection] = useState([]);
  const myUrl = "https://striveschool-api.herokuapp.com/api/profile/";

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchInfo(myUrl);
      setData(userData);
      randomize(userData)

      console.log(userData);
    };
    fetchData();
  }, []);

  console.log(`FeedUsers!!`, data);

  console.log(randomSelection);


  const randomize = async (userData) => {
      let selection = []
    for (let i = 0; i < 3; i++) {
      let randomInt = Math.floor(Math.random() * userData.length);
      const currentUser = userData[randomInt];
         selection.push(currentUser)
      console.log("3 Random Users", randomSelection);
    }
    setRandomSelection(selection)
    return;
  };

 
 return (
    <>
      {data && randomSelection ? (
        randomSelection.map((person) => (
          <li className="d-flex pymk-li" key={person._id}>
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
                    <h3 className="text-dark m-0 text-left pymkh6p2">
                      <strong>{person.name}</strong>{" "}
                      <strong>{person.surname}</strong>
                    </h3>
                    <p className="text-muted title-resize mb-0 text-left  pymkh6p2">
                      {person.title}
                    </p>
                  </div>
                </a>
              </Link>
              <div className="mb-2 pymkdiv2">
                <button class="btn btn-primary pymkbtn text-muted ml-4">
                  <span className="pymkbtnspan2">
                    <i className="bi bi-plus-lg"></i> Follow
                  </span>
                </button>
              </div>
            </div>
          </li>
        ))
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default AddFeedUsers;

// const AddFeedUsers = (props) => {
//   const [data, setData] = useState([]);
//   const [randomSelection, setRandomSelection] = useState([]);
//   const myUrl = "https://striveschool-api.herokuapp.com/api/profile/";

//   useEffect(() => {
//     const fetchData = async () => {
//       const userData = await fetchInfo(myUrl);
//       setData(userData);
//       console.log(userData);
//     };
//     fetchData();
//   }, [props]);

//   console.log(`FeedUsers!!`, data);

//   console.log(randomSelection);

//   useEffect(() => {
//     randomize();
//   }, [data]);
//   const randomize = async () => {
//     for (let i = 0; i < 3; i++) {
//       let randomInt = Math.floor(Math.random() * data.length);
//       const currentUser = data[randomInt];
//       randomSelection.push(currentUser);
//       console.log(`3 Random Users`, randomSelection);
//     }
//     return;
//   };

//   return (
//     <>
//       {!data.length > 1 && !randomSelection.length > 1 ? (
//         randomSelection.map((person) => (
//           <li className="d-flex pymk-li" key={person._id}>
//             <div class="d-flex-column align-items-center">
//               <Link to={"/profile/" + person._id}>
//                 <a className="d-flex pymk-a">
//                   <img
//                     className="roundpic"
//                     src={person.image}
//                     alt=""
//                     width="50px"
//                     height="50px"
//                   />
//                   <div class="ml-2">
//                     <h3 className="text-dark m-0 text-left pymkh6p">
//                       <strong>{person.name}</strong>{" "}
//                       <strong>{person.surname}</strong>
//                     </h3>
//                     <p className="text-muted title-resize mb-0 text-left  pymkh6p">
//                       {person.title}
//                     </p>
//                   </div>
//                 </a>
//               </Link>
//               <div className="mb-2 pymkdiv">
//                 <button class="btn btn-primary pymkbtn text-muted mr-5">
//                   <span className="pymkbtnspan">
//                     <i className="bi bi-plus-lg"></i> Follow
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))
//       ) : (
//         <h1>Loading....</h1>
//       )}
//     </>
//   );
// };

// export default AddFeedUsers;
