import React, { Component } from "react";
import {
  Footer as FooterNB,
  FooterTab,
  Title,
  Left,
  Right,
  Body,
  Text,
  Button,
  Icon
} from "native-base";

const Footer = ({title, navigation}) => 
  <FooterNB>
    <FooterTab>
      <Button vertical active onPress={() => navigation.navigate('Home')}>
        <Icon name="home" />
        <Text>Home</Text>
      </Button>
      <Button vertical onPress={() => navigation.navigate('More')}>
        <Icon name="more" />
        <Text>More</Text>
      </Button>
    </FooterTab>
  </FooterNB>


export default Footer