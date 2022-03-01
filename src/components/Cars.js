import { Auth, API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import {listCars} from "../graphql/queries"
import { onCreateCar } from "../graphql/subscriptions";
import { CarContext } from "../context/CarState";

import ItemCard from "./ItemCard";
import Loading from "./Loading";

export default function Cars() {
  // const [carData, setCarData] = useState([]);

  const { cars, loadingAllCars, getCars } = useContext(CarContext);
  const [user, setUser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => setUser(user))
      .catch((err) => console.log(err));

    console.log(user);
    getCars();
    // console.log("Cars", cars);

    const subscriptions = API.graphql(graphqlOperation(onCreateCar)).subscribe({
      next: ({ provider, value }) => {
        // console.log({ provider, value})
        console.log("Calling getCars()");
        getCars(); //This is obviously not a good idea because as soon as this hits, there will be requests on the server that match the number of open clients
      },
      error: (error) => console.error(error),
    });

    return () => subscriptions.unsubscribe();
  }, []);

  const onClickHandler = async (e) => {
    e.preventDefault();
    console.log(cars[0]);
  };

  return (
    <>
      {!loadingAllCars ? (
        <Loading />
      ) : (
        <Container fluid>
          <Row>
            {cars.map((car, i) => (
              <Col
                xs={6}
                lg={2}
                className="d-flex justify-content-center flex-wrap"
                key={i}
              >
                <ItemCard itemData={car}  />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}
