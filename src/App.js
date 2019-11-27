import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import Homepage from "./components/homepage/Homepage";
import Portfolio from "./components/portfolio/Portfolio";
import Videos from "./components/videos/Videos";
import Services from "./components/services/Services";

import { fetchAllUsers } from "./store/users/actions";
import { fetchAllVideos } from "./store/videos/actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllVideos();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Grid.Column>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/videos" component={Videos} />
              <Route path="/services" component={Services} />
            </Switch>
          </Grid.Column>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    locations: state.locations
  };
};

export default connect(mapStateToProps, {
  fetchAllUsers,
  fetchAllVideos
})(App);
