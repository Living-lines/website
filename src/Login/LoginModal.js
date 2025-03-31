import React from 'react';
import './LoginModal.css'; // Create this CSS file

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <div className="modal-header">
          <h2>Login</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input type="email" id="email" />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" />
          <a href="#" className="forgot-password">
            Forgot Password ?
          </a>
          <button className="login-button">Login</button>
          <p className="new-user">
            New user ? <a href="#">Create An Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}


export default LoginModal;