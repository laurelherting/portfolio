import React, { Component } from 'react';
import ResumePropTypes from '../propTypes/resume';

const Statement extends React.createClass => ({
    propTypes: {
        basics: ResumePropTypes.basics
    },

    render: () => {
        return (
            <div id='objective'>
                <p>{this.props.basics.summary}</p>
            </div>
        );
    }
});

export default Statement;
