import React from 'react';
import ResumePropTypes from '../propTypes/resume';

class BulletPoints extends React.Component {
    propTypes: {
        points: ResumePropTypes.bulletPoints
    },

    render: () => {
      return (
       <div>
        {this.props.points.map((point, index) => {
          return (
            <p key={index}>
            <span>&bull;</span>
            {point}
            </p>
        })}
        </div>
      );
    };
};
export default BulletPoints;
