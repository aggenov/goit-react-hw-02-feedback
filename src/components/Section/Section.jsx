import React from "react";
import PropTypes from 'prop-types';
import style from './Section.styled';


export class Section extends React.Component {

  render() {
    const { title, children } = this.props;
    
    return (
      <style.Section>
        <h2>{title}</h2>
        {children}
      </style.Section>
    )
  }
}


Section.propTypes = {
 title: PropTypes.string.isRequired
}