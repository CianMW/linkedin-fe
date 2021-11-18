import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const POSTModal = ({ smShow, setSmShow, fetchFeed, token }) => {
  const [text, setText] = useState({ text: "" });
  const [photo, setPhoto] = useState(null);
  // temporarily hardcoded user id
  const user = { user: process.env.REACT_APP_CURRENTUSER };

  const newPost = async (e) => {
    e.preventDefault(e);
    try {
      console.log("TRYING POST FETCH");
      const response = await fetch(process.env.REACT_APP_URL + "posts/", {
        method: "POST",
        body: JSON.stringify({ ...user, ...text }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let post = await response.json();
        console.log(`this is the post ID`, post._id);

        if (photo && post._id) {
          try {
            let formData = new FormData();
            formData.append("image", photo);

            const response = await fetch(
              process.env.REACT_APP_URL +`posts/${post._id}`,
              {
                method: "POST",
                body: formData
              }
            );
            if (response.ok) {
              console.log(response);

              fetchFeed();
              setPhoto(false);
              setText({ text: "" });
              fetchFeed();
              setSmShow(false);
            } else {
              console.log(`wow... that wasn't supposed to happen... Error`);
              alert(`Woops we lost your data in the void .. try refreshing`);
            }
          } catch (error) {
            console.error(error);
          }
        } else {
          setText({ text: "" });
          fetchFeed();
          setSmShow(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setText(text);
    console.log(text);
  }, [text]);

  //   const postPhoto = async(id) => {
  //   let formData = new FormData();
  //   formData.append("post", photo);

  //   const response = await fetch(
  //     `https://striveschool-api.herokuapp.com/api/posts/${id}`,

  //     {
  //       method: "POST",
  //       body: formData,
  //       headers: {
  //         Authorization: token,
  //       },
  //     }
  //   );
  //   if (response.ok) {
  //     console.log(response);

  //     fetchFeed();
  //     setPhoto(false);
  //   } else {
  //     console.log('we got an error');
  //   }
  // }

  return (
    <>
      <Modal
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Create a post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="#1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
                // name="description"
                value={text.text}
                onInput={(event) =>
                  setText({ ...text, text: event.target.value })
                }
                id="description"
                rows="4"
                cols="81"
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Form.Group className="mb-3" controlId="#1">
                <Form.Control
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="rounded-pill"
                onClick={(e) => newPost(e)}
              >
                Post
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default POSTModal;
