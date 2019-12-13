import React from "react";
import { connect } from "react-redux";
import { Container, Item, Segment } from "semantic-ui-react";
import { selectVideo } from "../../store/videos/actions";
import { TopNav } from "../layout/TopNav";
import VideosItem from "./VideosItem";
import { VideosHeader } from "./VideosHeader";
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
      <TopNav history={props.history} />
      <Container style={{ margin: "25px", padding: "25px" }}>
        Videos
        {console.log("videos props", props)}
        <Item.Group divided>
          {props.videos.all.map(video => (
            <VideosItem key={video.id} video={video} />
          ))}
        </Item.Group>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps, {
  selectVideo
})(Videos);
