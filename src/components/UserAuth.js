import React, { useState } from "react";
import { Auth } from "aws-amplify";

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
  const [radioValue, setRadioValue] = useState(0);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState();

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const radios = [
    { name: "Sign In", value: 0 },
    { name: "Sign Up", value: 1 },
  ];

  async function signUp() {
    try {
      let username = allValues.email.split("@")[0];
      let email = allValues.email;
      let password = allValues.password;

      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      setSignUpSuccess(true);
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async function confirmSignUp() {
    try {
      let username = allValues.email.split("@")[0];
      let confirmation = allValues.confirmation;
      await Auth.confirmSignUp(username, confirmation);
    } catch (error) {
      console.log("error confirming signup:", error);
    }
  }

  async function signIn() {
    let email = allValues.email;
    let password = allValues.password;
    try {
      const user = await Auth.signIn(email, password);
      setUserInfo(user);
      console.log(user);
    } catch (error) {
      console.log("error signing in:", error);
    }
  }

  async function signOut(){
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (radioValue === "1") {
      console.log("sign up");
      signUp();
    } else {
      console.log("sign in");
      signIn();
    }
    console.log("some stuff was submitted");
  };

  const confirmationHandler = (e) => {
    e.preventDefault();
    confirmSignUp();
  };

  const signOutHandler = (e) => {
    e.preventDefault();
    signOut();
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <Card
            style={{ width: "18rem", height: "18rem" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Card.Body>
              <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "success" : "danger"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => {setRadioValue(e.currentTarget.value)}}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-2">
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
                    name="password"
                    placeholder="password"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-2">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {signUpSuccess && (
        <Row>
          <Col className="d-flex justify-content-center">
            <Card
              style={{ width: "18rem", height: "18rem" }}
              className="d-flex justify-content-center align-items-center"
            >
              <Form onSubmit={confirmationHandler}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="confirmation"
                    placeholder="Confirmation Number"
                    onChange={changeHandler}
                  />
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <Button type="button" variant="danger" onClick={signOutHandler} >Sign Out</Button>
        </Col>
      </Row>
    </Container>
  );
}
