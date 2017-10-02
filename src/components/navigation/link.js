import React from 'react';
import PropTypes from React.PropTypes;

class Link extends React.createClass {
    propTypes: {
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    },

    render: () => {
        return (
            <li>
                <a className='smoothscroll' href={'#' + this.props.link}>{this.props.name}</a>
            </li>
        );
    }
};

export default Link;
