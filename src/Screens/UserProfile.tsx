// Accessing Route Parameters with TypeScript in React
 import React from 'react';
import { useParams } from 'react-router-dom';

interface UserProfileParams {
  username: string;
  [key: string]: string | undefined;
}

const UserProfile: React.FC = () => {
  const { username } = useParams<UserProfileParams>();

  return (
    <div>
      <h1>User Profile Example</h1>
      <p>This is the User Profile page content.</p>
      <h2>{`Username: ${username}`}</h2>
    </div>
  );
};

export default UserProfile;
