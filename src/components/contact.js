import React from 'react';
import ResumePropTypes from '../prop_types/resume';

class Contact extends React.Component {
    propTypes: {
      basics: ResumePropTypes.basics
    },

    render: () => {
      <div id='contact-info' className='vcard'>
        <h1 className='fn'>{this.props.basics.name}</h1>
        <p>
          Cell: <a className='tel' href={'skype:' + this.props.basics.phone}>{this.props.basics.phone}</a>
          <br/>
          Email: <a className='email' href={'mailto:' + this.props.basics.email}>{this.props.basics.email}</a>
        </p>
      </div>
    };
};
export default BulletPoints;
