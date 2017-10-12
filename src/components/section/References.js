import React from 'react';

import Carousel from 'nuka-carousel';

import ResumePropTypes from '../../propTypes/Resume';

const Entry = () => (
    propTypes: {
        entry: ResumePropTypes.references
    },

    render: () => {
        return (
            <div>
                <blockquote>
                    <p>{this.props.entry.reference}</p>
                    <cite>
                        {this.props.entry.name}
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {`${this.props.entry.position}, ${this.props.entry.company}`}
                    </cite>
                </blockquote>
            </div>
        );
    }
));

const References = () => (
    propTypes: {
        content: ResumePropTypes.referencesSet
    },

    render: function () => {
        const carouselConfig = {
            autoplay: true,
            decorators: [],
            framePadding: '10px',
            cellSpacing: 30,
            wrapAround: true
        };
        return (
            <section id='testimonials'>
                <div className='text-container'>
                    <div className='row'>
                        <div className='two columns header-col'>
                            <h1>
                                <span>References</span>
                            </h1>
                        </div>
                        <div className='columns flex-container'>
                            <div className='flexslider'>
                                <Carousel
                                    autoplay={carouselConfig.autoplay}
                                    decorators={carouselConfig.decorators}
                                    wrapAround={carouselConfig.wrapAround}>
                                    {this.props.content.map((entry, index) => {
                                        return (
                                            <Entry key={index} entry={entry}/>
                                        );
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
));

export default References;
