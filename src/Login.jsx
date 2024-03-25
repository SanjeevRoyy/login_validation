import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  // State for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

 
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to your authentication endpoint
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        { username, password }
      );

      // Assuming successful login, you can handle the response here
      console.log('Login Successful:', response.data);

      // Reset form fields and errors
      setUsername('');
      setPassword('');
      setError(null);
    } catch (error) {
      // Handle login errors
      console.error('Login Error:', error.response.data);
      setError('Invalid credentials. Please try again.');
    }
  };
    // Redirect to the home page if logged in
   

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <div className="error">{error}</div>}
      </form>
      <button>register</button>
    </div>
  );
};

export default Login;
