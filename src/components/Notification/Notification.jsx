import React from "react";
import PropTypes from 'prop-types';
import { Text } from "./Notification.styled";

export class Notification extends React.Component{
  render(){
const {message} = this.props
    return(     
        <Text>{message}</Text>   
    )
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
