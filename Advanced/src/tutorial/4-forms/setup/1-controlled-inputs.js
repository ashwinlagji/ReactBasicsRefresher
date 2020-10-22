import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email){
        const person = { id: new Date().getTime(),firstName, email };
        setPeople((people) => {
          return [...people, person];
        });

        setEmail('');
        setFirstName('');
    } else {
      console.log("Empty or Invalid form")
    }
  }

  return <>
  <article>
    <form className="form" onSubmit={handleSubmit}>

      <div className="form-control">
        <label htmlFor="firstName"> Name:</label>
        <input 
            id="firstName" 
            type="text" 
            name="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}></input>
      </div>

      <div className="form-control">
        <label htmlFor="email"> Email:</label>
        <input 
            id="email" 
            type="text" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
      </div>

      <button type="submit">Add Person</button>
    
    </form>

    {people.map((person, index) => {
      const { id, firstName, email } = person;
      return (
        <div className='item' key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      );
    })}
  </article>
  </>;
};

export default ControlledInputs;
