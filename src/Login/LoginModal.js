import React from 'react';
import './LoginModal.css';

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <div className="form-container">
          <div className="modal-header">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <h2 className="title-animated">Login</h2>

          <form className="form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              <div className="forgot">
                <a href="#">Forgot Password ?</a>
              </div>
            </div>
            <button className="sign">Sign in</button>
          </form>

          <div className="social-message">
            <div className="line"></div>
            <p className="message">Login with social accounts</p>
            <div className="line"></div>
          </div>

          <div className="social-icons">
            <button className="icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </button>
          </div>

          <p className="signup">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
