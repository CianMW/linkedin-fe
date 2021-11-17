import ActualFeed from "./ActualFeed";
import StartAPost from "./StartAPost";
import { useState, useEffect } from "react";
import { token } from "../../../lib";

const MainFeedSection = ({user}) => {
  let [feed, setFeed] = useState([]);
  const [smShow, setSmShow] = useState(false);

  const fetchFeed = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL +`posts/`,
        {
          headers: {
            Authorization:token,
          },
        }
      );
     
      if(response.ok){ 
         const exp = await response.json();
         console.log("HERE ARE THE POSTS!",exp.post)
        let slicedFeed = exp.post.reverse().slice(0, 50);
         setFeed(slicedFeed);
         console.log(slicedFeed)
      }
     
        
    } catch (e) {
      console.log(e);
    }
  };

 

  useEffect(() => {
    fetchFeed();
    console.log(feed);
  }, []);

 

  return (
    <>
      <StartAPost smShow={smShow} setSmShow={setSmShow} fetchFeed={fetchFeed} token={token} user={user}/>
      <br /> 
      <ActualFeed reversedFeed={feed} fetchFeed={fetchFeed} token={token}/>

    </>
  );
};

export default MainFeedSection;
