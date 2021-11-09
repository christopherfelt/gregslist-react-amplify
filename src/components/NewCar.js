import React, {useState} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


export default function NewCar() {

  const [allValues, setAllValues] = useState();

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(allValues);
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
