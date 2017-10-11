import React from 'react';
import ResumePropTypes from '../propTypes/resume';

const bulletPoints = () => (
    propTypes: {
        points: ResumePropTypes.bulletPoints
    },

    render: () => {
       <div>
        {this.props.points.map((point, index) => {
          return (
            <p key={index} className='point'>
            <span>&bull;</span>
            {point}
            </p>
        })}
        </div>
    };
);

export default BulletPoints;
