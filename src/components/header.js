import React from 'react';
 
import Header extends React.createClass({
    render: () => {
      const style = {
        height: this.state.window.height
      };

        return (
            <header id='home'>
                {this.props.children}
            </header>
        );
    }
});

export default Header;
