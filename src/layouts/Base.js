import React, { Component } from "react"
import {
  Container,
  Content,
} from "native-base"
import Header from "./../components/Header"
import Footer from "./../components/Footer"

class Base extends Component {
    render() {
        const { title, children, navigation } =  this.props
        return (
        <Container>
            <Header title={title} navigation={navigation} />
            <Content padder>
                {children}
            </Content>
            <Footer navigation={navigation} />
        </Container>
        );
    }
}

export default Base