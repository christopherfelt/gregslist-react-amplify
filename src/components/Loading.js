import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

export default function Loading({ isLoading, children }) {
  
  console.log("loading:",isLoading)
  return (
    <>
      {isLoading ? (
        <Container className="vh50 vw-100" fluid>
          <Row className="w-100 h-100">
            <Col className="w-100 h-100 d-flex justify-content-center align-items-center">
              <Spinner animation="border" />
            </Col>
          </Row>
        </Container>
      ) : (
        children
      )}
    </>
  );
}
