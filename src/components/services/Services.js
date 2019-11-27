import React from "react";
import { Segment } from "semantic-ui-react";
import { TopNav } from "../layout/TopNav";
import Background from "../layout/background.jpg";
import { ServicesHeader } from "./ServicesHeader";

const Videos = props => {
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
        <ServicesHeader />
      </Segment>
    </div>
  );
};
export default Videos;
