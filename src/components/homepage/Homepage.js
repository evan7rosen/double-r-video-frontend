import React from "react";
import { Segment, Container, Header, Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { HomepageHeader } from "./HomepageHeader";
import { Footer } from "../layout/Footer";
import { TopNav } from "../layout/TopNav";
import Background from "../layout/background.jpg";

const Homepage = props => {
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
        <HomepageHeader />
      </Segment>
      <Segment style={{ padding: "4em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Let us capture your next event!
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            We pride ourselves on our product. Click the link below to view our
            services.
          </p>
          <Link to={"/inventory"}>
            <Button size="large">View our Inventory</Button>
          </Link>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          ></Divider>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Many Convenient Locations to Serve You
          </Header>
          <p style={{ fontSize: "1.33em" }}>Double R Video</p>
          <Link to={"/locations"}>
            <Button size="large">View our Locations</Button>
          </Link>
        </Container>
      </Segment>
      <Footer />
    </div>
  );
};

export default Homepage;

Homepage.propTypes = {
  history: PropTypes.object.isRequired
};
