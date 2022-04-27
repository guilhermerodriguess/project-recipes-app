import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router';
import RecipeContext from '../context/RecipesContext';

const Login = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const history = useHistory();
  const [password, setPassword] = useState('');
  const {
    email,
    setEmail } = useContext(RecipeContext);
  console.log(btnDisabled);

  const validation = () => {
    const minPass = 6;
    const emailFormat = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(email);
    const validatePass = password.length > minPass;

    if (validatePass && emailFormat) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const onClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  useEffect(() => {
    validation();
  }, [email, password]);

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input
            value={ email }
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Password"
            value={ password }
            type="password"
            name="password"
            required=""
            data-testid="password-input"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <button
          data-testid="login-submit-btn"
          disabled={ btnDisabled }
          type="button"
          onClick={ onClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
export default Login;
