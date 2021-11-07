import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


export default function NewCar() {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMake">
            <Form.Label>Make</Form.Label>
            <Form.Control type="text" placeholder="Make"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formModel">
            <Form.Label>Model</Form.Label>
            <Form.Control type="text" placeholder="Make"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMake">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="0"></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
