import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('f');
  const [isError, setError] = useState(true);

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return <>
    {/*<h1>{firstValue}</h1>
<h1>{secondValue}</h1>*/}

    <h1>{text || 'John Dode'}</h1>
    { text && 'Hello ther'}
    { isError ?  (
        <h2>There is an error ..</h2>
    ): (
        <h2>Sorry no error..</h2>
    )}
  </>;
};

export default ShortCircuit;
