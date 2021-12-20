import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NewCar from "../NewCar";
import Cars from "../Cars";

export default function CarPage() {
  const [ show, setShow ] = useState(false);

  const changeHandler = (e) => {
    setShow(!show);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button onClick={changeHandler}>
              Add Car
            </Button>
          </Col>
        </Row>
      </Container>
      <NewCar show={show} onClick={changeHandler} />
      <Cars />
    </>
  );
}
