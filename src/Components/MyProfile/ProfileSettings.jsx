import { Button, Modal, Form, Container } from "react-bootstrap";
import { SetState, useEffect, useState } from "react";
import { fetchInfo } from "../../lib";
import { token } from "../../lib";
import dotenv from "dotenv/config";

const ProfileSettings = ({ user, setRefresh, refresh }) => {
  const [lgShow, setLgShow] = useState(false);
  const [name, setName] = useState("");
  const [settings, setSettings] = useState(user);
  const [pic, setPic] = useState(false);
  const [isProfilePic, setIsProfilePic] = useState("");
  // name: user.name,
  // surname: user.surname,
  // email: user.email,
  // bio: user.bio,
  // title: user.title,
  // area: user.area,

  // console.log(user);

  const [image, setImage] = useState(null);

  // const target = (e) => {
  //   console.log(e.target.files[0]);
  //   if (e.target && e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  const submitImage = async (e) => {
    e.preventDefault();
    console.log("MONGOOSE", user._id);
    try {
      let formData = new FormData();
      formData.append("image", image);

      const response = await fetch(
        process.env.REACT_APP_URL + `users/${user._id}/upload`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (response.ok) {
        console.log(response);

        setPic(false);
        setLgShow(false);
        setRefresh(!refresh);
      } else {
        console.log(`wow... that wasn't supposed to happen... Error`);
        alert(`Woops we lost your data in the void .. try refreshing`);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const submitBackgroundImage = async (e) => {
    e.preventDefault();
    console.log("MONGOOSE", user._id);
    try {
      let formData = new FormData();
      formData.append("image", image);

      const response = await fetch(
        process.env.REACT_APP_URL + `users/${user._id}/backgroundUpload`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (response.ok) {
        console.log(response);

        setPic(false);
        setLgShow(false);
        setRefresh(!refresh);
      } else {
        console.log(`wow... that wasn't supposed to happen... Error`);
        alert(`Woops we lost your data in the void .. try refreshing`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserSettings = async (e) => {
    e.preventDefault(e);
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + `users/${user._id}`,
        {
          method: "PUT",
          body: JSON.stringify(settings),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("SETTINGS OBJECT AFTER UPDATE");
        console.log(settings);
        console.log(response);
        console.log("Updated successfully");
        setLgShow(false);
        setRefresh(!refresh);
      } else {
        console.log(settings);

        console.log(`wow... that wasn't supposed to happen... Error`);
        alert(`Woops we lost your data in the void .. try refreshing`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setSettings(user);
  }, [user]);

  return (
    <>
      <button
        className="profile-button pencil-button"
        onClick={() => setLgShow(true)}
      >
        <i class="bi bi-pencil"></i>
      </button>
      <div>
        <Modal
          id="profile-settings"
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton id="profile-settings">
            <Modal.Title id="example-modal-sizes-title-lg">
              Edit intro
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <small className="text-muted">* indicates required fields</small>
            {
              pic !== true ? (
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                      type="text"
                      onInput={(event) =>
                        setSettings({ ...settings, name: event.target.value })
                      }
                      value={settings.name}
                      placeholder="Enter your first name"
                    />

                    <Form.Label>Surname *</Form.Label>
                    <Form.Control
                      type="text"
                      onInput={(event) =>
                        setSettings({
                          ...settings,
                          surname: event.target.value,
                        })
                      }
                      value={settings.surname}
                      placeholder="Enter your surname"
                    />

                    <Form.Label>Email address *</Form.Label>
                    <Form.Control
                      type="email"
                      onInput={(event) =>
                        setSettings({ ...settings, email: event.target.value })
                      }
                      value={settings.email}
                      placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>

                    <Form.Label>Bio *</Form.Label>
                    <Form.Control
                      type="textarea"
                      onInput={(event) =>
                        setSettings({ ...settings, bio: event.target.value })
                      }
                      value={settings.bio}
                      placeholder="Tell the world about yourself"
                    />

                    <Form.Label>Position Title *</Form.Label>
                    <Form.Control
                      type="text"
                      onInput={(event) =>
                        setSettings({ ...settings, title: event.target.value })
                      }
                      value={settings.title}
                      placeholder="What position do you hold?"
                    />

                    <Form.Label>Area *</Form.Label>
                    <Form.Control
                      type="text"
                      onInput={(event) =>
                        setSettings({ ...settings, area: event.target.value })
                      }
                      value={settings.area}
                      placeholder="Where are you based?"
                    />

                    <Button
                      className="mr-2 mt-3"
                      onClick={(e) => updateUserSettings(e)}
                    >
                      Save
                    </Button>
                    <Button
                      className="mr-2 mt-3"
                      onClick={(e) => {
                        setPic(true);
                        setIsProfilePic(true);
                      }}
                    >
                      Update picture
                    </Button>
                    {/* sets profile pic modal to backgroud image */}
                    <Button
                      className="mr-2 mt-3"
                      onClick={(e) => {
                        setPic(true);
                        setIsProfilePic(false);
                      }}
                    >
                      Update banner picture
                    </Button>
                  </Form.Group>
                </Form>
              ) : isProfilePic === true ? (
                <Form>
                  <Form.Group className="mb-3" controlId="#1">
                    <Form.Control
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      rows={3}
                      placeholder="What do you want to talk about?"
                      // name="description"

                      id="description"
                      rows="4"
                      cols="81"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="primary"
                      type="submit"
                      className="rounded-pill ml-2"
                      onClick={(e) => submitImage(e)}
                    >
                      Update picture
                    </Button>
                  </div>
                </Form>
              ) : (
                <>
                  {" "}
                  <Form>
                    <Form.Group className="mb-3" controlId="#1">
                      <Form.Control
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        rows={3}
                        placeholder="What do you want to talk about?"
                        // name="description"

                        id="description"
                        rows="4"
                        cols="81"
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="primary"
                        type="submit"
                        className="rounded-pill ml-2"
                        onClick={(e) => submitBackgroundImage(e)}
                      >
                        Update picture
                      </Button>
                    </div>
                  </Form>
                </>
              ) // ) : (
            }
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default ProfileSettings;
