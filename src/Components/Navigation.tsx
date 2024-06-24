//Simple way to Navigate Between Routes with TypeScript
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    let username = 'JoeBlog';
  return (
    (<nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
              </li>
              <li>
         <Link to="/redirect">Redirect To Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
                  <Link to={`/userprofile/${username}`}>User Profile</Link>
        </li>
      </ul>
    </nav>)
  );
};

export default Navigation;
