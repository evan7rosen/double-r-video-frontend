import React from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";

const CardForm = props => (
  <Card>
    <Image src="https://semantic-ui.com/images/avatar/large/elliot.jpg" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
);

const mapStateToProps = state => {
  return {
    users: state.users,
    videos: state.locations
  };
};

export default connect(mapStateToProps)(CardForm);
