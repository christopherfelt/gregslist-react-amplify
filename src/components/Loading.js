import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Container className="vh50 vw-100" fluid>
      <Row className="w-100 h-100">
        <Col className="w-100 h-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" />
        </Col>
      </Row>
    </Container>
  );
}
