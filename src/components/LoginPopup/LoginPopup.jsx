// React
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

//package
import axios from 'axios';

// Component
import './LoginPopup.css';

// Assets
import { assets } from '../../assets/assets';

// context
import { StoreContext } from '../../context/StoreContext';

const LoginPopup = ({ setShowLogin }) => {
  const { setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState('Login');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let url = import.meta.env.VITE_SERVER_URL;

    if (currentState === 'Login') {
      url += '/api/user/login';
    } else {
      url += '/api/user/register';
    }

    const res = await axios.post(url, data);
    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      setShowLogin(false);
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={onLogin} className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-input">
          {currentState === 'Login' ? (
            <> </>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your Name"
              required
            />
          )}

          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Password"
            required
          />
          {currentState === 'Login' ? (
            <> </>
          ) : (
            <input
              type="password"
              name="confirmPassword"
              onChange={onChangeHandler}
              value={data.confirmPassword}
              placeholder="confirm Password"
              required
            />
          )}
        </div>
        <button type="submit">
          {currentState === 'Sign Up' ? 'Create an account' : 'Login'}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing , I agree to the terms of uses & privacy policy.</p>
        </div>
        {currentState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account!{' '}
            <span onClick={() => setCurrentState('Login')}>
              Login here
            </span>{' '}
          </p>
        )}
      </form>
    </div>
  );
};

LoginPopup.propTypes = {
  setShowLogin: PropTypes.func
};

export default LoginPopup;
