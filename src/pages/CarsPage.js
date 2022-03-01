import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import NewCar from "../components/NewCar";
import Cars from "../components/Cars";
import Loading from "../components/Loading";

import { CarContext } from "../context/CarState";

export default function CarPage() {
  const [ show, setShow ] = useState(false);

  const changeHandler = (e) => {
    setShow(!show);
  };

  return (
    <>
      <Container className="vw-100" fluid>
        <Row className="w-100">
          <Col className="w-100 d-flex justify-content-end">
            <div className="w-100 m-2 p-2 text-end">
              <Button onClick={changeHandler}>
                Add Car
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <NewCar show={show} onClick={changeHandler} />
      <Cars />
    </>
  );
}
