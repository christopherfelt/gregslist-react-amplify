import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Auth } from "aws-amplify";

import { CarContext } from "../context/CarState";

export default function Car({
  match: {
    params: { carId },
  },
}) {
  const { cars, getCars } = useContext(CarContext);

  const [car, setCar] = useState({ title: "", description: "", make:"",
                                  model:"", price:"" });
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("Cars from detail", cars[0]);
    if (!cars[0]) {
      getCars();
    } else {
      setCar((car) => cars.find((car) => car.id === carId));
    }
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch((err) => console.log(err));

    console.log(
      "Car",
      cars.find((car) => car.id === carId)
    );
  }, [cars]);

  const onClickHandler = async (e) => {
    e.preventDefault();
    console.log(cars);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{car.title}</Card.Title>
              <Card.Text>{car.description}</Card.Text>
              <ListGroup>
                <ListGroupItem>{car.make}</ListGroupItem>
                <ListGroupItem>{car.model}</ListGroupItem>
                <ListGroupItem>{car.price}</ListGroupItem>
              </ListGroup>
              <Button variant="primary" className="mt-2" onClick={onClickHandler}>
                Bid
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
