import React, {useState} from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    ListGroup,
    ListGroupItem,
  } from "react-bootstrap";
import EditableText from "../components/utilities/EditableText";
export default function Form() {

    const [editedValues, setEditedValues] = useState({title:""});
    const [fieldChange, setFieldChange] = useState(false);
    
    const onChangeHandler = (e) => {
        // setFieldChange(true);
        setEditedValues({ ...editedValues, [e.target.name]: e.target.value });
    };
    
    const onSaveHandler = (e) => {
    e.preventDefault();
    let updatedCarInput = editedValues;
    console.log(editedValues);
    // g.run("putCar", updatedCarInput)
    // setEditMode(!inEditMode);
    };

    const deleteHandler = async (e) => {
    e.preventDefault();
    // g.run("deleteCar", { id: car.id });
    };


    return (
        <Container className="mt-3">
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                    <EditableText
                        field="title"
                        handleChange={onChangeHandler}
                        startValue={editedValues.title}
                        disable={false}
                    >
                        <Card.Title>{editedValues.title}</Card.Title>
                    </EditableText>
                    <EditableText
                        field="description"
                        handleChange={onChangeHandler}
                        startValue={editedValues.description}
                        disable={false}
                    >
                        <Card.Text>{editedValues.description}</Card.Text>
                    </EditableText>
                    <ListGroup>
                        <EditableText
                        field="make"
                        handleChange={onChangeHandler}
                        startValue={editedValues.make}
                        disable={false}
                        >
                        <ListGroupItem>{editedValues.make}</ListGroupItem>
                        </EditableText>
                        <EditableText
                        field="model"
                        handleChange={onChangeHandler}
                        startValue={editedValues.model}
                        disable={false}
                        >
                        <ListGroupItem>{editedValues.model}</ListGroupItem>
                        </EditableText>
                        <EditableText
                        field="price"
                        handleChange={onChangeHandler}
                        startValue={editedValues.price}
                        disable={false}
                        >
                        <ListGroupItem>{editedValues.price}</ListGroupItem>
                        </EditableText>
                    </ListGroup>

                    <div>
                        {fieldChange && (
                        <Button
                            variant="primary"
                            className="mt-2"
                            onClick={onSaveHandler}
                        >
                            Save
                        </Button>
                        )}

                        <Button
                        variant="danger"
                        className="ms-2 mt-2"
                        onClick={deleteHandler}
                        >
                        Delete
                        </Button>
                    </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}
