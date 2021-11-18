import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

export default function UserAuth() {
  const [allValues, setAllValues] = useState();
  const [radioValue, setRadioValue] = useState(1);

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const radios = [
    { name: "Sign In", value: 1 },
    { name: "Sign Up", value: 2 },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("some stuff was submitted");
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Body>
              <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-success" : "outline-danger"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  {/* <Form.Label>Email</Form.Label> */}
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group>
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="password"
                    name="email"
                    placeholder="password"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="m-2">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
