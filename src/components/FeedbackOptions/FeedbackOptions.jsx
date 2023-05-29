import React from "react";
import PropTypes from 'prop-types';



export class FeedbackOptions extends React.Component {

  render() {   
    const { options, onLeaveFeedback } = this.props

    return (     
      <div>
        { options.map( option => {
            return (<button
              key={ option }
              onClick={()=>{onLeaveFeedback( option )}}
            > 
            {option.charAt(0).toUpperCase() + option.slice(1)} 
            </button>)
          })
        }
      </div>
    )
  }
}



FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}