import React, {useState} from "react";
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function ItemCard({itemData}) {

  const [shadow, setShadow] = useState(false);

  // function mouseOver (event) {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   event.target.style = "box-shadow: 5px 10px";
  // }

  // function mouseOut(event){
    
  // }


  return (
    <Card style={{ width: "18rem" }} className="m-3" >
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

        <Button variant="primary" as={Link} to={"/car/"+itemData.id} >Go to car</Button>
      </Card.Body>
    </Card>
  );

    

}
