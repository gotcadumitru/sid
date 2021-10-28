import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { FetchStatus } from '../../../common/state/redux/reducer/user.reducer';
import { confirmRegistrationThunk } from '../../../common/state/redux/thunk/user.thunk';

const ConfirmRegistration = (props) => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const confirmRegisterToken = match.params.confirmRegisterToken;
  const { confirmRegistration } = useSelector((state) => state.profileInfo);

  useEffect(() => {
    dispatch(confirmRegistrationThunk(confirmRegisterToken));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (confirmRegistration.fetchStatus === FetchStatus.SUCCESS) {
      alert(confirmRegistration.message);
      history.push('/profile');
    }
    if (confirmRegistration.fetchStatus === FetchStatus.FAIL) {
      alert(confirmRegistration.message);
      history.push('/auth/register');
    }
    // eslint-disable-next-line
  }, [confirmRegistration]);
  return <div className="auth__confirm-registration">Loading...</div>;
};
export default ConfirmRegistration;
