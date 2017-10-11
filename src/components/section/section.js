import React from 'react';

import ResumePropTypes from '../../propTypes/resume';
import About from './about';
import Resume from './resume';
import Work from './work';
import Education from './education';
import Footer from './footer';

const Section = () => (
    propTypes: {
        basics: ResumePropTypes.basics,
        work: ResumePropTypes.work_set,
        education: ResumePropTypes.education_set,
        skills: ResumePropTypes.skills_set,
        languages: ResumePropTypes.languages_set,
        references: ResumePropTypes.references_set,
        changeWaypoint: PropTypes.func.isRequired
    },

    render: () => {
        const skills_content = {
            skills: this.props.skills,
            languages: this.props.languages
        };
        return (
            <div>
                <About content={this.props.basics}/>
                <Resume>
                    <Work content={this.props.work}/>
                    <Education content={this.props.education}/>
                    <Skills={this.props.skills}/>
                </Resume>
                <References={this.props.references}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
);

export default Section;
