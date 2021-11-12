import React, {useState} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createCar } from "../graphql/mutations";

export default function NewCar() {

  const [allValues, setAllValues] = useState();

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const input = {
       ...allValues,
       user: "me",
    }

    await API.graphql(graphqlOperation(createCar, { input }));
  }

  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Title" onChange={changeHandler} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" placeholder="Description" onChange={changeHandler} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMake">
            <Form.Label>Make</Form.Label>
            <Form.Control type="text" name="make" placeholder="Make" onChange={changeHandler}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formModel">
            <Form.Label>Model</Form.Label>
            <Form.Control type="text" name="model" placeholder="Model" onChange={changeHandler}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMake">
            <Form.Label>Price</Form.Label>
            <Form.Control type="price" name="price" placeholder="0" onChange={changeHandler}></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
