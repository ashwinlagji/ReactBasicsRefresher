import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = value;
  })

  useEffect(() => {
    document.title = value;
  }, [value]) // will be called when value changes

  useEffect(() => {
    console.log('Runs Only Once')
  }, []); // due to empty second parameter

  const buttonClickHandler = () => {
    setValue((value) => {
      return value +1;
    })
  }

  return <>
  <h1>{value}</h1>
    <button onClick={buttonClickHandler}>Click me</button>
  </>;
};

export default UseEffectBasics;
