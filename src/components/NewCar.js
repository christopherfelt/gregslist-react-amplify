import React, { useState, useContext } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { API, Auth, graphqlOperation } from "aws-amplify";
// import {createCar} from "../graphql/mutations"
// import { CarContext } from "../context/CarState";
import { GlobalContext, PerformAction } from "../context/GlobalState";

export default function NewCar({show, onClick}) {
  const [allValues, setAllValues] = useState();
  const carState = useContext(GlobalContext);

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let user = await Auth.currentUserInfo();
    console.log(user);
    var newCarInput = {...allValues, user: user.attributes.email};
    PerformAction(carState.methods, "postCar", newCarInput);
    // postCar({...allValues, user: user.attributes.email});

    // await API.graphql(graphqlOperation(createCar, {  }));
  };

  return (
    <Modal show={show} onHide={onClick}>
      <Modal.Header>
        <h1>New Car</h1>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="d-flex justify-content-center">
            <Form >
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={changeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMake">
                <Form.Label>Make</Form.Label>
                <Form.Control
                  type="text"
                  name="make"
                  placeholder="Make"
                  onChange={changeHandler}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formModel">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  name="model"
                  placeholder="Model"
                  onChange={changeHandler}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMake">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="price"
                  name="price"
                  placeholder="0"
                  onChange={changeHandler}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" onClick={submitHandler}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
