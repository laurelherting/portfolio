import React from 'react';

import Link from './Link';
import config from '../../Config';

const Navigation = () => (
    propTypes: {
        currentSection: PropTypes.string.isRequired
    },
    render: () => {
        return (
            <nav id='nav-wrap' className='opaque'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>Show navigation</a>
                <a className='mobile-btn' href='#' title='Hide navigation'>Hide navigation</a>
                <ul id='nav' className='nav'>
                    {Object.keys(config.navigation_links).map(function (navigation_link, index) {
                        const navigation_name = config.navigation_links[navigation_link];
                        return (
                            <Link key={index} link={navigation_link} name={navigation_name}/>
                        );
                    })}
                </ul>
            </nav>
        );
    }
);

export default Navigation;
