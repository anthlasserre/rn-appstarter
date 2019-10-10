import React, { Component } from "react";
import {
  Button,
  Text
} from "native-base";
import Base from "../../layouts/Base/"

class More extends Component {
  render() {
    return (
      <Base title={"More"} navigation={this.props.navigation}>
        <Text>This is the More page</Text>
      </Base>
    );
  }
}

export default More;