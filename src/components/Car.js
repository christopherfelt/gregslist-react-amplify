import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Auth } from "aws-amplify";

import { CarContext } from "../context/CarState";

export default function Car({
  match: {
    params: { carId },
  },
}) {
  const { cars } = useContext(CarContext);

  const [ car, setCar ] = useState();
  const [ user, setUser ] = useState();

  
  useEffect(() => {
      console.log("Cars from detail", cars)
    setCar(car => cars.find((car) => car.id === carId));
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
    
      console.log("Car", cars.find((car) => car.id === carId))

  }, [cars]);

  const onClickHandler = async (e) => {
      e.preventDefault();
      console.log(cars);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Title>Car Detail</Card.Title>
            <Button variant="primary" onClick={onClickHandler}>Get Cars</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
