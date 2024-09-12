import React, { useState } from "react";
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';

const Login = ({ params }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setCredentials(
      {
        ...credentials,
        [e.target.name]: e.target.value
      }
    );
  };

  const login = (e) => {
    e.preventDefault();
      axios
        .post('http://localhost:5000/api/login', credentials)
        .then((resp) => {
          setError('');
          window.localStorage.setItem('token', JSON.stringify(resp.data.payload));
          history.push('/bubble');
        })
        .catch((err) => {
          console.log(err)
          setError('Please enter a valid username and password.');
        });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>

      <div data-testid="loginForm" className="login-form">
        <form onSubmit={login}>
          <label>Username:&nbsp;</label>
          <input
              data-testid="username"
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
          />
          <br/>
          <br/>
          <label>Password:&nbsp;</label>
          <input
              data-testid="password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
          />
          <br/>
          <button>Log in</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
