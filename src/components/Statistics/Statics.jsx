import React from "react";
import PropTypes from 'prop-types';
import style from './Statics.styled';

export class Statistics extends React.Component {    
    
    render() {
        const { good, neutral, bad, total, percentage } = this.props;
        const elements = ['Good: ', 'Neutral: ', 'Bad: ', 'Total: ', 'Positives feedback: '];
        const values = [ good, neutral, bad, total, percentage ];

        return (
            <style.List>
                {elements.map(( element, index )=>(
                    <style.Item key={element}>
                        <style.Text>
                            {element}<style.Number>{ index!==4 ? values[index] : values[index] + '%' }</style.Number>
                        </style.Text>
                    </style.Item>
                ))}
            </style.List>   
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