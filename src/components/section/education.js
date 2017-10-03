import React from 'react';

import ResumePropTypes from '../../propTypes/resume';
import Datetime from '../../utils/datetime';

class Entry extends React.createClass {
    propTypes: {
        entry: ResumePropTypes.education
    },

    render: () => {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{this.props.entry.institution}</h3>
                    <p className='info'>
                        {this.props.entry.area}
                        <span> &bull; </span>
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                </div>
            </div>
        );
    }
};

class Education extends React.createClass{
    propTypes: {
        content: ResumePropTypes.education_set
    },

    render: () => {
        return (
            <div className='row education'>
                <div className='three columns header-col'>
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>
                <div className='nine columns main-col'>
                    {this.props.content.map((entry, index) => {
                        return (
                            <Entry key={index} entry={entry}/>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Education;
