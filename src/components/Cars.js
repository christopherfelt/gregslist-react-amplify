import { Auth, API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import {listCars} from "../graphql/queries"
import {onCreateCar} from "../graphql/subscriptions";
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
    // console.log("Cars", cars);

    const subscriptions = API.graphql(graphqlOperation(onCreateCar)).subscribe({
      next: ({provider, value}) => console.log({ provider, value}),
      error: error => console.error(error)
    })

    return () => subscriptions.unsubscribe();


  }, []);

  
  // useEffect(() => {
  


  //   return () => {
      
  //   }
  // }, [])

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
    console.log(cars[0]);
  };

  return (
    <Container fluid>
      <Row>
        {cars.map((car) => (
          <Col xs={2} className="d-flex justify-content-center">
            <ItemCard itemData={car} key={car.id} />
          </Col>
        ))}
      </Row>
      {/* <Row>
        <Col>
        <Button variant="primary" onClick={onClickHandler}>Get Cars</Button>
        </Col>
      </Row> */}
    </Container>
  );
}
