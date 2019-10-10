import React, { Component } from "react";
import {
  Header as HeaderNB,
  Title,
  Left,
  Right,
  Body,
  Text,
  Button,
  Icon
} from "native-base";

const Header = ({title, navigation}) => 
    <HeaderNB>
        <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
        </Left>
        <Body>
            <Title>{title}</Title>
        </Body>
        <Right />
    </HeaderNB>


export default Header