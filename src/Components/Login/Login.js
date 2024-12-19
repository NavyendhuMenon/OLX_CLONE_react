import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';
import { AuthContext, FirebaseContext } from '../../store/Context'; 

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { auth } = useContext(FirebaseContext);  
  const {setUser} = useContext(AuthContext)
  const history = useHistory();  

  const handleSubmit = async (e) => {
    e.preventDefault();  

    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      setUser({ name: user.displayName || email, email: user.email });
      
      history.push('/');  

    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('No user found with this email');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password');
      } else {
        setErrorMessage(error.message);  
      }
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
          />
          <br />
          
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a href="/signup">Signup</a>  
      </div>
    </div>
  );
}

export default Login;
