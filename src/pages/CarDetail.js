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

// import { CarContext } from "../context/CarState";
import { GlobalContext, PerformAction } from "../context/GlobalState";

export default function Car({
  match: {
    params: { carId },
  },
}) {
  const carStore = useContext(GlobalContext);

  const [car, setCar] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    if (carStore.cars.length == 0) {
      PerformAction(carStore.methods, "getCars")
    } else {
      setCar(() => carStore.cars.find((car) => car.id === carId));
    }
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch((err) => console.log(err));

    console.log(
      "Car",
      carStore.cars.find((car) => car.id === carId)
    );
  }, [carStore.cars]);

  const onClickHandler = async (e) => {
    e.preventDefault();
    console.log(carStore.cars);
  };

  const deleteHandler = async(e) =>{
    e.preventDefault();
    let user = await Auth.currentUserInfo();
    console.log(user);
  }

  return (
    <Container className="mt-3">
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
              <div>

               <Button variant="primary" className="mt-2" onClick={onClickHandler}>
                 Bid
                </Button>
               <Button variant="danger" className="ms-2 mt-2" onClick={deleteHandler}>Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
