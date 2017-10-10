import React, { Component } from 'react';
import PropTypes from React.PropTypes;

const Loading = () => (
    propTypes: {
        text: PropTypes.string,
        speed: PropTypes.number
    },

    getDefaultProps: () => {
        return {
            text: 'Loading',
            speed: 300
        };
    },

    getInitialState: () => {
        this.originalText = this.props.text;
        return {
            text: this.originalText
        };
    },

    componentDidMount: () => {
        const stopper = this.originalText + '...';
        this.interval = setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.originalText
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }
        }.bind(this), this.props.speed);
    },

    componentWillUnmount: () => {
        window.clearInterval(this.interval);
    },

    render: () => {
        return (
            <div className='loading'>
                <p className='loading'>{this.state.text}</p>
            </div>
        );
    }
));

export default Loading;
