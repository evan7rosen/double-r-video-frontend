import React from "react";
import { Container, Card, Segment } from "semantic-ui-react";
import { fields } from "./portfolioFields";
import PortfolioItem from "./PortfolioItem";
import { PortfolioHeader } from "./PortfolioHeader";
import { TopNav } from "../layout/TopNav";
import Background from "../layout/background.jpg";

const Portfolio = props => {
  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 600,
          padding: "1em 0em",
          backgroundImage: `url(${Background})`,
          backgroundSize: "100% 100%"
        }}
        vertical
      >
        <TopNav history={props.history} />
        <PortfolioHeader />
      </Segment>
      <Container>
        <Card.Group centered>
          {fields.map(({ id, title, description, url }) => (
            <PortfolioItem
              key={id}
              title={title}
              description={description}
              url={url}
            />
          ))}
        </Card.Group>
      </Container>
    </div>
  );
};

export default Portfolio;
