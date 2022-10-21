import React from 'react';

const Body = (props) => {
    // 🔥 Make sure the parent of Posts is passing the right props!
    const { body } = props;
  
    return (
      <div className='posts-container-wrapper'>
        <p>
        <span role="img" aria-label='go!'>🚀</span> {body.explanation} <span role="img" aria-label='go!'>🚀</span>
        </p>
      </div>
    );
  };
  
  export default Body;