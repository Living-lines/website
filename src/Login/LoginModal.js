import React, { useState } from 'react';
import './LoginModal.css';

function LoginModal({ isOpen, onClose, onForgot, onSignup, onSubmit }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    if (onSubmit) onSubmit({ username, password });
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <div className="form-container">
          <div className="modal-header">
            <button className="close-button" onClick={onClose} aria-label="Close login modal">
              &times;
            </button>
          </div>
          <h2 className="title-animated">Login</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <div className="forgot">
                <button
                  type="button"
                  className="as-link"
                  onClick={onForgot}
                  aria-label="Forgot Password"
                >
                  Forgot Password?
                </button>
              </div>
            </div>
            <button className="sign" type="submit">Sign in</button>
          </form>

          <div className="social-message">
            <div className="line"></div>
            <p className="message">Login with social accounts</p>
            <div className="line"></div>
          </div>

          <div className="social-icons">
            <button className="icon" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </button>
            <button className="icon" aria-label="Twitter">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </button>
            <button className="icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </button>
          </div>

          <p className="signup">
            Don't have an account?{' '}
            <button
              type="button"
              className="as-link"
              onClick={onSignup}
              aria-label="Sign up"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
