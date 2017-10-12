import React from 'react';
import PropTypes from React.PropTypes;

import ResumePropTypes from '../propTypes/Resume';

const mapIcon(socialMedia) => {
    const media = socialMedia.replace(/ /g, '-');
    switch (socialMedia) {
        case 'email':
            return (
                <i className={'fa fa-envelope'}/>
            );
        case 'quora':
            return (
                <i className='fa fa-fw'>
                    <strong className='fa-quora'>Q</strong>
                </i>
            );
        default:
            return (
                <i className={`fa fa-${media}`}/>
            );
    }
}

const SocialMedia = () => (
    propTypes: {
        ulClass: PropTypes.string.isRequired,
        profiles: ResumePropTypes.profiles
    },

    render: () => {
        return (
            <ul className={this.props.ulClass}>
                {this.props.profiles.map((profile, index) => {
                    const icon = mapIcon(profile.network.toLowerCase());
                    return (
                        <li key={index}>
                            <a href={profile.url}>
                                {icon}
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }
));

export default SocialMedia;
