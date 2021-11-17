import { Tooltip, Overlay, OverlayTrigger, Popover } from "react-bootstrap";
const EditSettingsRightBar = () => {
    const popover = (
        <Popover className="tooltip-user-profile" placement="bottom" id="popover-basic">
          <Popover.Content >
          See and edit how you look to people who are not signed in, and find you through search engines (ex: Google, Bing).
          </Popover.Content>
        </Popover>
    )
    const popover2 = (
        <Popover className="tooltip-user-profile" placement="bottom" id="popover-basic">
          <Popover.Content >
          Creating a profile in another language makes it easier for local business contacts and recruiters to find you on LinkedIn.
          </Popover.Content>
        </Popover>
    )

  return (
    <>
      <div className=" d-flex justify-content-between list-pad1 list-group-item">
        <p className="edit-text-link" >{"Edit public profile & URL"}</p>

        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
        <i class="bi bi-question-circle-fill"></i>
            </OverlayTrigger>
      </div>
      <div className=" d-flex justify-content-between list-pad2 list-group-item">
        <p className="edit-text-link">{"Add profile in another language"}</p>


        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover2}>
        <i class="bi bi-question-circle-fill"></i>
            </OverlayTrigger>
      </div>
    </>
  );
};

export default EditSettingsRightBar;
