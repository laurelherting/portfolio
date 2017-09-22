import React, { Component } from 'react';

class Link extends React.Component {
  render() {
    return (
      <p>{this.props.content}</p>
      <li>
      <a className='smoothscroll' href={'#' + this.props.link}>{this.props.name}</a>
      </li>
    );
  }
}

App.propTypes = {
  content.React.PropTypes.string.isRequired
};

export default Link;
