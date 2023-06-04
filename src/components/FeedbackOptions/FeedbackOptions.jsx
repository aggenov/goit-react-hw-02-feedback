import React from "react";
import PropTypes from 'prop-types';
import {List, Button} from "./FeedbackOptions.styled";



export class FeedbackOptions extends React.Component {

  render() {   
    const { options, onLeaveFeedback } = this.props

    return (     
      <List>
        { options.map( option => {
            return (
              <li key={ option }>
                <Button onClick={()=>{onLeaveFeedback( option.toLowerCase() )}}> 
                  {option.charAt(0).toUpperCase() + option.slice(1)} 
                </Button>
              </li>
            
            )
          })
        }
      </List>
    )
  }
}



FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}