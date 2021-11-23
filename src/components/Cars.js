import { Auth } from "aws-amplify";
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import {listCars} from "../graphql/queries"
import { CarContext } from "../context/CarState";

import ItemCard from "./ItemCard";

export default function Cars() {
  // const [carData, setCarData] = useState([]);

  const { cars, getCars } = useContext(CarContext);
  const [user, setUser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => setUser(user))
      .catch((err) => console.log(err));

    getCars();
    console.log("Cars", cars);
  }, []);

  // const fetchCars = async() => {
  //   try {
  //     const data = await API.graphql(graphqlOperation(listCars))
  //     const items = data.data.listCars.items
  //     setCarData(items);
  //   } catch (error) {
  //     console.log('error fetching cars')
  //   }
  // }

  const onClickHandler = async (e) => {
    e.preventDefault();
    console.log(cars);
  }

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button as={Link} to="/new-car">
            Add Car
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          {cars.map((car) => (
            <ItemCard itemData={car} key={car.id} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
        <Button variant="primary" onClick={onClickHandler}>Get Cars</Button>
        </Col>
      </Row>
    </Container>
  );
}
