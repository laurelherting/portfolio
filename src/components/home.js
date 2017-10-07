import React, { Component } from 'react';
import PropTypes from React.PropTypes;

import axios from 'axios';

import Header from './header';
import Navigation from './navigation';
import Banner from './banner';
import Section from './section';
import ScrollDown from './scrollDown';
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
        return axios
            .get(this.props.route.resume)
            .then((response) => {
                this.setState({
                    resume: response.data
                });
            }.bind(this));
    },

    render: () => {
        console.log(this.state);
         if (!this.state.resume) {
            return (
                <Loading />
            );
        }
        return (
          <div>
            <Header>
              <Navigation/>
              <Banner basics={this.state.resume.basics}/>
              <ScrollDown/>
            </Header>
            <Section
              basics={this.state.resume.basics}
              work={this.state.resume.work}
              education={this.state.resume.education}/>
          </div>
        )
    }
});

export default Home;
