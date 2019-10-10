import React, { Component } from "react";
import {
  Button,
  Text
} from "native-base";
import Base from "../../layouts/Base/"

class Home extends Component {
  render() {
    return (
      <Base title={"Home"} navigation={this.props.navigation}>
        <Text>This is the Home page</Text>
      </Base>
    );
  }
}

export default Home;