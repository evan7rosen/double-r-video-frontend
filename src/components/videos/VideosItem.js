import React from "react";
import { Item } from "semantic-ui-react";

const VideosItem = ({ video }) => {
  return (
    <Item href={video.link}>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content>
        <Item.Header>{video.header}</Item.Header>
        <Item.Description>{video.description}</Item.Description>
        <Item.Meta>{video.meta}</Item.Meta>
      </Item.Content>
    </Item>
  );
};

export default VideosItem;
