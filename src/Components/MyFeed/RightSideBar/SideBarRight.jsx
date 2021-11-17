import SecondPYMK from "../../MyProfile/SecondPYMK";
import PyMk from "../../MyProfile/PyMk";
import { Popover, OverlayTrigger } from "react-bootstrap";
import AddFeedUsers from "./AddFeedUsers";
import TopCourses from "./TopCourses";
import CompactFooter from "./CompactFooter";

const SideBarRight = () => {
  const popover = (
    <Popover placement="top" id="popover-basic">
      <Popover.Content>
        Follow things that interest you to personalize your feed. <span className="learn-more-link">Learn more</span>.
      </Popover.Content>
    </Popover>
  );

  return (
    <>
        <div>
      <div className="pt-2 section-container">
        <div className="alsoViewed">
          <div className="d-flex justify-content-between">
            <h4 className="myprofileh4 text-left mb-3">Add to your feed</h4>
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <i className="info-icon bi info-icon bi-info-square-fill"></i>
            </OverlayTrigger>

          </div>

          <ul className="ul">
            {/* <PyMk /> */}
            <AddFeedUsers />
          </ul>
          <div className="view-all-recommendations"><p >View all recommendations <i className="bi bi-arrow-right"></i></p></div>
          
        </div>
      </div>

      <TopCourses />
      <CompactFooter />
      </div>
    </>
  );
};

export default SideBarRight;




