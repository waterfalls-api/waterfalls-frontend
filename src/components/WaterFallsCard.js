import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const WaterFallsCard = props => {
  return (
    <div>
      <Card className='width'>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{(props.region, props.country)}</CardSubtitle>
          {/* <CardText>{props.}</CardText> */}
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default WaterFallsCard;
