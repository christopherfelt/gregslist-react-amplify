import { API, Auth, graphqlOperation } from "aws-amplify";
import React, {useState, useEffect} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import {listCars} from "../graphql/queries"

import ItemCard from "./ItemCard";

export default function Cars() {

  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetchCars()
  }, [])

  const fetchCars = async() => {
    try {
      const data = await API.graphql(graphqlOperation(listCars))
      const items = data.data.listCars.items
      setCarData(items);
    } catch (error) {
      console.log('error fetching cars')
    }
  }


  // const carData = [
  //   { id: 1, user: "me", title: "car one", description: "This is the first car", make: "Ford", model: "Taurus", price: 1934 },
  //   { id: 2, user: "me", title: "car two", description: "This is another car", make: "Chevy", model: "Prius", price: 2345 },
  // ];

  return (
    <Container fluid>
        <Row>
            <Col className="d-flex justify-content-center">
                <Button as={Link} to="/new-car">Add Car</Button>
            </Col>
        </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          {carData.map((car) => (
            <ItemCard itemData={car} key={car.id} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
