import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () =>{
      window.removeEventListener('resize', checkSize);
    }
  });

  const checkSize = () => {
    setWidth(window.innerWidth);
  }

  return <>
    <h1>{width}</h1>
  </>;
};

export default UseEffectCleanup;
