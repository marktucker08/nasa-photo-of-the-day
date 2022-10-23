import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: royalblue;
  font-family: sans-serif;
  text-align: center;
`

const Body = (props) => {
    // 🔥 Make sure the parent of Posts is passing the right props!
    const { body } = props;
  
    return (
      <WrapperDiv className='posts-container-wrapper'>
        <p>
        <span role="img" aria-label='go!'>🚀</span> {body.explanation} <span role="img" aria-label='go!'>🚀</span>
        </p>
      </WrapperDiv>
    );
  };
  
  export default Body;