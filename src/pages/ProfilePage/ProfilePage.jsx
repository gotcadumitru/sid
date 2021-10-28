import React from 'react';
import { useHistory } from 'react-router';
import { authToken } from '../../common/helpers/token.helper';

const ProfilePage = (props) => {
  const history = useHistory();

  return (
    <div className="profile">
      <div>Profile page</div>
      <button
        className="button"
        onClick={() => {
          authToken.removeToken();
          history.push('/auth/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
