import React from "react";
import { Card, Image, Container } from "semantic-ui-react";

const PortfolioItem = props => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={props.url}>
      <Card style={{ margin: "25px" }}>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <span className="date">{props.description}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </a>
  );
};

export default PortfolioItem;
