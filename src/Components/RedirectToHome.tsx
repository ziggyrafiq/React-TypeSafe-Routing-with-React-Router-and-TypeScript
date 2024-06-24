// Redirecting Between Routes with TypeScript in React
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const RedirectToHome: React.FC = () => {
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirecting(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {redirecting ? (
        <p>Redirecting to Home...</p>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default RedirectToHome;
