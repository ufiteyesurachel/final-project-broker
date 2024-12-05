import React, { useState } from 'react';
import '../styles/login-page.scss';

interface LoginPageProps {
  onLogin?: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setError(null);

    try {
      if (!username || !password) {
        setError('Please enter both email and password');
        return;
      }

      if (onLogin) {
        onLogin(username, password);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-illustration">
          <div className="illustration-content">
            <h2>Welcome to BrokerHub</h2>
            <p>Streamline your brokerage management with cutting-edge technology</p>
          </div>
        </div>
        <div className="login-form">
          <div className="form-header">
            <h1>Sign In</h1>
            <p>Access your professional dashboard</p>
          </div>

          {error && (
            <div className="error-banner">
              <i className="fas fa-exclamation-circle"></i>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email address" 
                required 
              />
            </div>

            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                required 
              />
            </div>

            <button type="submit">
              Sign In
            </button>

            <div className="form-footer">
              <a href="/forgot-password">Forgot Password?</a>
              <a href="/register">Create Account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;