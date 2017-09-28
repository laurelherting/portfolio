import React, { Component } from 'react';
import ResumePropTypes from '../../prop_types/resume';
import BulletPoints from '../bulletPoints';

const Entry extends React.createClass({
    propTypes: {
        entry: ResumePropTypes.work
    },

    render: () => {
        return (
            <div>
                <h2>{this.props.entry.position} <span>{this.props.entry.company}</span></h2>
                <p>{this.props.entry.summary}</p>
                <BulletPoints points={this.props.entry.highlights}/>
            </div>
        );
    }
});

const Content extends React.createClass({
    propTypes: {
        content: ResumePropTypes.work_set
    },

    render: () => {
        const title = 'Professional Experience';
        return (
            <div>
                <dd className='clear'></dd>
                <dt>{title}</dt>
                <dd>
                    {this.props.content.map((entry, index) => {
                        return (
                            <div key={index}>
                                <Entry entry={entry}/>
                            </div>
                        );
                    })}
                </dd>
                <dd className='clear'></dd>
            </div>
        );
    }
});

export default Content;
