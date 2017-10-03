import React from 'react';

import ResumePropTypes from '../../propTypes/resume';
import SocialMedia from '../socialMedia';

class Footer extends React.createClass {
    propTypes: {
        content: ResumePropTypes.basics
    },

    render: () => {
        return (
            <footer>
                <div className='row'>
                    <div className='twelve columns'>
                        <SocialMedia ul_class='social-links' profiles={this.props.content.profiles}/>
                    </div>
                    <div id='go-top'>
                        <a className='smoothscroll' title='Back to Top' href='#home'>
                            <i className='icon-up-open'></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
};

export default Footer;
