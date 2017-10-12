import React from 'react';
import PropTypes from React.PropTypes;

import ResumePropTypes from '../../propTypes/Resume';
import BulletPoints from '../bullet_points';
import Datetime from '../../utils/Datetime';

const Entry = () => (
    propTypes: {
        index: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        entry: ResumePropTypes.work
    },

    render: () => {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        const endDate = Datetime.getDisplayFromDate(this.props.entry.endDate);
        const index = this.props.index + 1;
        const divider = index === this.props.total ? (<br/>) : (<hr/>);

        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{this.props.entry.company}</h3>
                    <p className='info'>
                        {this.props.entry.position}
                        &nbsp;&bull;&nbsp;
                        <em className='date'>{startDate} - {endDate}</em>
                    </p>
                    <BulletPoints points={this.props.entry.highlights}/>
                </div>
                {divider}
            </div>
        );
    }
});

const Work = () => (
    propTypes: {
        content: ResumePropTypes.work_set
    },

    render: () => {
        const num_entries = this.props.content.length;
        return (
            <div className='row work'>
                <div className='three columns header-col'>
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>
                <div className='nine columns main-col'>
                    {this.props.content.map(function (entry, index) {
                        return (
                            <Entry key={index} index={index} total={num_entries} entry={entry}/>
                        );
                    })}
                </div>
            </div>
        );
    }
));

export default Work;
