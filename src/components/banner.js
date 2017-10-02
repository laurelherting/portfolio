import React from 'react';

import ResumePropTypes from '../propTypes/resume';
import SocialMedia from './socialMedia';

class Banner extends React.createClass {
    propTypes: {
        basics: ResumePropTypes.basics
    },

    render: () => {
        return (
            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>{this.props.basics.name}</h1>
                    <h3>{this.props.basics.summary}</h3>
                    <hr/>
                    <SocialMedia ul_class='social' profiles={this.props.basics.profiles}/>
                </div>
            </div>
        );
    }
};

export default Banner;
