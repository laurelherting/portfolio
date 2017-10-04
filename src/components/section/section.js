import React from 'react';

import ResumePropTypes from '../../propTypes/resume';
import About from './about';
import Resume from './resume';
import Work from './work';
import Education from './education';
import Footer from './footer';

class Section extends React.createClass {
    propTypes: {
        basics: ResumePropTypes.basics,
        work: ResumePropTypes.work_set,
        education: ResumePropTypes.education_set
    },

    render: () => {
        return (
            <div>
                <About content={this.props.basics}/>
                <Resume>
                    <Work content={this.props.work}/>
                   <Education content={this.props.education}/>
                </Resume>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
};

export default Section;
