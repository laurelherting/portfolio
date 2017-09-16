import React from 'react';

class notFound extends Component {
  render() {
    return (
      <div className='not-found'>
      404: It appears you have lost your way
      <br/>
      <span>
      Return to safety <a href='/'>here.</a>
      </span>
      </div>
    );
  }
};

export default notFound;
