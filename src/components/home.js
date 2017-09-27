import React, { Component } from 'react';
import PropTypes from React.PropTypes;

import axios from 'axios';

import Contact from './contact';
import Statement from './statement';
import Content from './content';
import Loading from './loading';

const Home extends React.createClass({
    propTypes: {
        route: PropTypes.shape({
            resume: PropTypes.string.isRequired
        }).isRequired
    },

    getInitialState: () => {
        return {
            resume: false
        };
    },

    componentDidMount: () => {
        axios
            .get(this.props.route.resume)
            .then((response) => {
                console.log(response);
                this.setState({
                    resume: response.data
                });
            }.bind(this));
    },

    render: () => {
        console.log(this.state);
        if (this.state.resume) {
            return (
                <div>
                    <img src={this.state.resume.basics.picture} alt={this.state.resume.basics.name} id='pic'/>
                    <Contact basics={this.state.resume.basics}/>
                    <Statement basics={this.state.resume.basics}/>
                    <Content work={this.state.resume.work} education={this.state.resume.education}/>
                </div>
            );
        } else {
            return (
                <Loading/>
            );
        }
    }
});

export default Home;
