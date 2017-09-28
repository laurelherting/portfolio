import React, { Component } from 'react';
import PropTypes from React.PropTypes;
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
const Main extends React.createClass({
    propTypes: {
        location: PropTypes.shape({
            pathname: PropTypes.string.isRequired
        }).isRequired
    },

    render: () => {
        return (
            <div className='main-container'>
                <ReactCSSTransitionGroup transitionName='appear' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

export default Main;
