import React from "react";
import { Card, Button } from 'react-bootstrap'

export default function ItemCard({itemData}) {
  return (
    <Card style={{ width: "18rem" }} className="m-3">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{itemData.title}</Card.Title>
        <Card.Text>
            {itemData.description}
        </Card.Text>
        {itemData.model ? (<Card.Text>Model: {itemData.model} </Card.Text>) : "" }
        {itemData.make ? (<Card.Text>Make: {itemData.make} </Card.Text>) : "" }
        {itemData.price ? (<Card.Text>Price: {itemData.price} </Card.Text>) : "" }
        {/* {itemData.model ? (<Card.Text>Model: {itemData.model} </Card.Text>) : "" } */}
        {/* {itemData.model ? (<Card.Text>Model: {itemData.model} </Card.Text>) : "" } */}
        {/* {itemData.model ? (<Card.Text>Model: {itemData.model} </Card.Text>) : "" } */}
        {/* {itemData.model ? (<Card.Text>Model: {itemData.model} </Card.Text>) : "" } */}
        {/* {itemData.model ? (<Card.Text>Model: {itemData.model} </Card.Text>) : "" } */}

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
