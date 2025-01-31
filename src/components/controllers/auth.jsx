import { useState } from 'react';
import MultiNodal from './MultiNodal';
import './auth.css';

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="auth-container">
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <p>{isRegistering ? "Create an account to get started." : "Log in to your account."}</p>

      <MultiNodal isRegistering={isRegistering} setIsRegistering={setIsRegistering} />

      <div className="auth-toggle">
        {isRegistering ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setIsRegistering(false)}>Log in here</span>.
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setIsRegistering(true)}>Register here</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
