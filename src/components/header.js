import React from 'react';
 
import Header extends React.createClass({
    render: () => {
        return (
            <header id='home'>
                {this.props.children}
            </header>
        );
    }
});

export default Header;
