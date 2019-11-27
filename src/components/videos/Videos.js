import React from "react";
import { Container, Segment, Item, Image } from "semantic-ui-react";
// import VideosItem from "./VideosItem";
import { VideosHeader } from "./VideosHeader";
import { TopNav } from "../layout/TopNav";
import Background from "../layout/background.jpg";

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
        <VideosHeader />
      </Segment>
      <Container>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header as="a">Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </div>
  );
};

export default Videos;
