import React from "react";
import { Container, Header } from "semantic-ui-react";

export const HomepageHeader = () => (
  <Container text>
    <Header
      as="h1"
      content="Double R Video Productions"
      inverted
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "0.25em"
      }}
    />
    <Header
      as="h2"
      content="Arizona's Event Video Specialists"
      inverted
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "0.25em"
      }}
    />
  </Container>
);
