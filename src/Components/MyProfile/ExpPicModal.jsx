import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { token } from "../../lib";

const POSTPic = ({ expId, userId, picExp, setPicExp }) => {
  const [imageExp, setImageExp] = useState(null);

  const target = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      setImageExp(e.target.files[0]);
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("experience", imageExp);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,

        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        console.log(response);
        


      
        setPicExp(false);
      } else {
        console.log();

        console.log(`wow... that wasn't supposed to happen... Error`);
        alert(`Woops we lost your data in the void .. try refreshing`);
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
      <Modal
        show={picExp}
        onHide={() => setPicExp(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Add an image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="#1">
              <Form.Control
                type="file"
                onChange={target}
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
                className="rounded-pill"
                onClick={(e) => submitImage(e)}
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

export default POSTPic;
