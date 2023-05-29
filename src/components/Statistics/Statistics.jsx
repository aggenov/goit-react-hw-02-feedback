import React from "react";
import PropTypes from 'prop-types';


export class Statistics extends React.Component {    
    
    render() {
        const { good, neutral, bad, total, percentage } = this.props;
        return (
            <div>
            {/* <h2></h2> */}
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: <span>{total}</span></p>
            <p>Positives feedback: <span>{percentage}%</span></p>
            </div>   
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired
}