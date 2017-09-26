import React from 'react';
import ResumePropTypes from '../prop_types/resume';

class BulletPoints extends React.Component {
    propTypes: {
        points: ResumePropTypes.bullet_points
    },

    render: () => {
      return (
        <ul>
        {this.props.points.map((point, index) => {
          return (
            <li key={index}>{point}</li>
          );
        })}
        </ul>
      );
    };
};
export default BulletPoints;
