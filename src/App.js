import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Homepage from "./components/homepage/Homepage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Grid.Column>
            <Switch>
              <Route exact path="/" component={Homepage} />
            </Switch>
          </Grid.Column>
        </div>
      </Router>
    );
  }
}
export default App;
