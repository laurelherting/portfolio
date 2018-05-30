import React from 'react';

const Portfolio = () => (
  <div>
    <section id="portfolio">
      <div className="row">
        <h1>portfolio</h1>
      </div>
      <div className="portfolioItem" />
      <a
        href="https://github.com/laurelherting/portfolio/"
        title="Click to view code on GitHub"
      >
        <p>React Single-Page App</p>
      </a>
      <br />
      <div className="reactTransitions">
        <a
          href="https://react-full-stack-list.herokuapp.com/"
          title="Click to view Heroku deployed app"
        >
          <p>React Full Stack App</p>
        </a>
        <p>app</p>
        <br />
        <div className="season-quotes">
          <a
            href="https://season-quotes.herokuapp.com/"
            title="Click to view Heroku deployed app"
          >
            <p>ExpressJS React App</p>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Portfolio;
