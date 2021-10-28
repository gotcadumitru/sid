import React, { useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordThunk } from '../../../common/state/redux/thunk/user.thunk';
import Input from '../../../common/components/common/Input';
import { FetchStatus } from '../../../common/state/redux/reducer/user.reducer';

const initialValues = {
  password: {
    value: '',
    errorMessage: '',
  },
};
const ResetPassword = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const { resetPassword } = useSelector((state) => state.profileInfo);
  const [resetPasswordData, handleResetPasswordData] = useState({ ...initialValues });

  useEffect(() => {
    if (resetPassword.fetchStatus === FetchStatus.SUCCESS || resetPassword.fetchStatus === FetchStatus.FAIL) {
      alert(resetPassword.message);
      history.push('/auth/login');
    }
    // eslint-disable-next-line
  }, [resetPassword]);

  const handleSubmit = async () => {
    if (checkIfExistErrors()) return;
    const resetToken = match.params.resetToken;
    dispatch(resetPasswordThunk(resetPasswordData.password.value, resetToken));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    handleResetPasswordData({
      ...resetPasswordData,
      [name]: {
        errorMessage: '',
        value,
      },
    });
  };

  const checkIfExistErrors = () => {
    let isErrors = false;
    let formDataCopy = JSON.parse(JSON.stringify(resetPasswordData));

    Object.keys(formDataCopy).forEach((key) => {
      if (!formDataCopy[key].value) {
        isErrors = true;
        formDataCopy[key].errorMessage = 'This field is required';
      }
    });
    if (isErrors) {
      handleResetPasswordData(formDataCopy);
    }
    return isErrors;
  };

  return (
    <div className="auth__reset-password">
      <h2 className="auth__title">Reset password</h2>

      <Input
        onChange={handleChangeInput}
        errorMessage={resetPasswordData.password.errorMessage}
        value={resetPasswordData.password.value}
        inputLabel="Password"
        className="input"
        placeholder="+6 Character"
        type="password"
        name="password"
      />
      <br />
      <button className="button" onClick={handleSubmit}>
        Reset Password
      </button>

      <div className="auth__links">
        Go back to
        <Link to="/auth/login"> Log In</Link>
      </div>
    </div>
  );
};
export default ResetPassword;
