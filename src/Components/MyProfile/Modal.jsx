import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ResponsiveEmbed } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DesktopDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { deleteSingleUserExp, token } from "../../lib";

const ModalPop = ({ user, fetchExp, lgShow, setLgShow, expId, setExpId }) => {
  // const [lgShow, setLgShow] = useState(false);
  const [upload, setUpload] = useState(null);
  const [checked, setChecked] = useState(false);
  // const url = `https://striveschool-api.herokuapp.com/api/profile/${user.id}/experiences`;
  console.log("hellooo" + user);

  let url = process.env.REACT_APP_URL +`users/${user}/experience/${expId}`;
  let method = "";

  {
    expId ? (method = `PUT`) : (method = `POST`);
  }

  const validationSchema = yup.object().shape({
    role: yup.string().required("Title is required"),
    company: yup.string().required("Company is required"),
    startDate: yup
      .string()

      .required("Start date is required"),
    endDate: yup
      .string()

      .required("End date is required"),
    description: yup.string().required("Confirm Password is required"),
  });

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
    useFormik({
      initialValues: {
        role: "",
        company: "",
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        area: "",
      },
      onSubmit: async (values) => {
        try {
          // console.log("blllaaaaa" + method, url);
          const response = await fetch(url, {
            method: method,
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          });
          console.log(response);
          if (response.ok) {
           let postResponse = await response.json();
           console.log(`this is the post response`, postResponse);
           if(upload){ await submitImage(postResponse.user, postResponse._id )}
           
            fetchExp();
            setLgShow(false);
            setFieldValue({
              role: "",
              company: "",
              startDate: new Date(),
              endDate: new Date(),
              description: "",
              area: "",
            });
          }
        } catch (e) {
          console.log(e);
        }
      },
      validationSchema: validationSchema,
    });

    const submitImage = async (userId, expId,) => {
      
      try {
        let formData = new FormData();
        formData.append("image", upload );
  
        const response = await fetch(
          process.env.REACT_APP_URL +`users/${userId}/experience/${expId}/upload`,
  
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
          
  
  
        
          setUpload(false);
        } else {
          console.log();
  
          console.log(`wow... that wasn't supposed to happen... Error`);
          alert(`Woops we lost your data in the void .. try refreshing`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      if(lgShow === false) {
        setExpId('')
      }
    },[lgShow])

  return (
    <>
      <div className=" modalbtn">
        <button
          className="profile-button pencil-button"
          onClick={() => setLgShow(true)}
        >
          <i class="bi bi-plus-lg bi-css text-dark "></i>
        </button>
      </div>
      <Modal
        className="modal"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Form className="px-4" style={{ height: "500px", overflow: "auto" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Title*</Form.Label>
              <Form.Control
                name="role"
                type="text"
                value={values.role}
                onChange={handleChange}
                placeholder="Ex: Retail Sales Manager"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-muted">Employment type</Form.Label>
              <Form.Control as="select">
                <option>Please select</option>
                <option> Full-time</option>
                <option>Part-time</option>
                <option>Self-employed</option>
                <option>Freelance</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Apprenticeship</option>
                <option>Freiwilliges Soziales Jahr</option>
                <option>Verbeamtet</option>
                <option>Duales Studium</option>
                <option>Werkstudium</option>
              </Form.Control>
              <Form.Text className="text-muted">
                Country-specific employment types
              </Form.Text>
            </Form.Group>
            <div className="mb-3">
              <a href="" style={{ fontWeight: "bold" }}>
                Learn more
              </a>
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Company name*</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                placeholder="Ex; Microsoft"
              />
              <Form.Text className="text-muted">
                Country-specific employment types
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Location</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={values.area}
                onChange={handleChange}
                placeholder="Ex: London, United Kingdom"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                className="mt-5 mb-2"
                type="checkbox"
                label="I'm currently working in this  role"
                value={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />

              <div className="d-flex">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Start Date"
                    value={values.startDate}
                    onChange={(date) => setFieldValue("startDate", date)}
                    name="startDate"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>

              {!checked && (
                <div className="d-flex mt-4">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="End date"
                      value={values.endDate}
                      onChange={(date) => setFieldValue("endDate", date)}
                      name="endDate"
                      renderInput={(params) => <TextField {...params} />}
                    />{" "}
                  </LocalizationProvider>
                </div>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Headline</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Industry</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Text className="text-muted">
                LinkedIn uses industry information to provide more relevant
                recommendations
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <label for="description" className="text-muted">
                Description
              </label>
              <Form.Control
                as="textarea"
                name="description"
                value={values.description}
                onChange={handleChange}
                id="description"
                rows="4"
                cols="81"
              />
              <Form.Text className="text-muted text-right">0/2,000</Form.Text>
            </Form.Group>
            <Form.Control
              onChange={(e)=> setUpload(e.target.files[0])}
              placeholder="jinx"
              className="mb-3 md-add-media"
              type="file"
            />
          </Form> 
        </Modal.Body>

        <Modal.Footer>
          {expId ? (
            <div>
              <Button
                className="modal-save mr-1"
                variant="primary"
                onClick={() => handleSubmit()}
              >
                <span className="span-md-btn " style={{marginLeft:"-6px"}}>Update</span>
              </Button>
              <Button
                className="modal-save"
                variant="danger"
                onClick={() =>
                  deleteSingleUserExp(user, expId, fetchExp, setLgShow)
                }
              >
                <span className="span-md-btn">
                  <i class="bi bi-trash"></i>
                </span>
              </Button>
            </div>
          ) : (
            <Button
              className="modal-save"
              variant="primary"
              onClick={() => handleSubmit()}
            >
              <span className="span-md-btn">Save</span>
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPop;
