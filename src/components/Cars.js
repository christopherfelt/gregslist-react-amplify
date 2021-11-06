import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import ItemCard from "./ItemCard"

export default function Cars() {


    const carData = [
        {user: "me", make: "Ford", model: "Taurus", price: 1934, },
        {user: "me", make: "Chevy", model: "Prius", price: 2345, }
    ]

    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center">
                    {
                        carData.map((car) => (
                            <ItemCard itemData={car} />
                        ))
                    }

                </Col>
            </Row>
        </Container>
    )
};
