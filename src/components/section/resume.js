import React from 'react';
 
import Resume extends React.createClass {
    render: () => {
        return (
            <section id='resume'>
                {this.props.children}
            </section>
        );
    }
};

export default Resume;
