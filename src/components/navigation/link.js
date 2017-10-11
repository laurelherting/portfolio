import React from 'react';
import PropTypes from React.PropTypes;

const Link = () => (
    propTypes: {
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        currentSection: PropTypes.string.isRequired
    },

    render: () => {

// const isCurrent = this.props.link === this.props.currentSection ? 'current' : '';
        const isCurrent = '';
        return (
            <li className={isCurrent}>
                <a className='smoothscroll' href={'#' + this.props.link}>{this.props.name}</a>
            </li>
        );
    }
);

export default Link;
