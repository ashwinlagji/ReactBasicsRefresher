import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/ashwinlagj';
const MultipleReturns = () => {

  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {

    setLoading(true);

    fetch(url)
      .then((resp) => {
        if(resp.status >=200 && resp.status <=299) {
            return resp.json();
        } else {
          setLoading(false); 
          setError(true);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setLoading(false);
      })
      .catch((error) => console.log(error))
  }, []);

  if(loading){
    return <h1>Loading ...</h1>
  }

  if(isError){
    return <h1>Error ...</h1>
  }

  return <h1>{user}</h1>;
};

export default MultipleReturns;
