import { OverlayTrigger, Popover } from "react-bootstrap";
import AddFeedUsers from "./AddFeedUsers";
import { useState, useEffect} from "react";

const TopCourses = () => {

  const [anime, setAnime] = useState([])

  const trial = async () => {
    try {
      const response = await fetch('https://animechan.vercel.app/api/quotes')
      if(response.ok){
        const info = await response.json();
        console.log(`i am the info`,info)
        setAnime(info.slice(0,3))
      }
    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
  trial()
 },[])

  const popover = (
    <Popover placement="top" id="popover-basic">
      <Popover.Content>
        These are the day’s trending animes on LinkedIn Tv.{" "}
        <span className="learn-more-link">Learn more</span>.
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <div className=" mt-2 pt-2 course-container-section">
        <div className="alsoViewed">
          <div className=" pl-1 pr-1 d-flex justify-content-between">
            <h4 className="myprofileh4 text-left pl-1 pr-1 mb-3">Today's top Anime</h4>
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              <i className="info-icon bi info-icon bi-info-square-fill"></i>
            </OverlayTrigger>
          </div>
            <div className="course-container">
              {
                anime.map((manga, i) => (
                  <div className=" pl-1 pr-1 top-course-item">
                  <div className=" course-name truncate"><p>{i+1}{'.'}{manga.anime}</p></div>
                  <div className="course-owner truncate">{manga.character}</div>
              </div>
                ))
              }

                {/* <div className="pl-1 pr-1 top-course-item">
                    <div className="course-name truncate"><p>2. Teaching and its Practices</p></div>
                    <div className="course-owner truncate">Ciara Dunley</div>
                </div>
                <div className=" pl-1 pr-1 top-course-item">
                    <div className="course-name truncate"><p>3. Minfulness in Your Daily Life</p></div>
                    <div className="course-owner truncate">Gareth Brewly</div>
                </div> */}
        
            </div>
          <div className="view-all-recommendations">
            <p>
              Show more on LinkedIn Learning
              <i className="bi bi-arrow-right"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCourses;
