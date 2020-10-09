import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const decreaseHandler = () => {
    setValue(value-1)
  }
  const resetHandler = () => {
    setValue(0)
  }
  const increaseHandler = () => {
    setValue(value+1)
  }

  return <>
    <section>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={decreaseHandler}>decrease</button>
        <button className='btn' onClick={resetHandler}>Reset</button>
        <button className='btn' onClick={increaseHandler}>Incrase</button>
    </section>
    <section>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => {
          setTimeout( ()=> {
            setValue((prevState) => {
              return prevState+1 })
          }, 2000)
        }}>Increase later</button>
    </section>
  </>;
};

export default UseStateCounter;
