import React, { FC } from 'react';
import { MDBInput, MDBBtn } from 'mdbreact';
import { LoginViewProps } from '../Login.types';
import Loader from '../../../Loader/Loader';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/reducers';

const LoginForm: FC<LoginViewProps> = function LoginForm({
	handleEmailInput,
	handlePasswordInput,
	submitLogin,
	loginValue,
	passwordValue,
}) {
	const isLoading = useSelector((state: AppState) => state.isLoginRequestStarted);
	return (
		<form>
			<p className="h4 text-center mb-4 loginTitle">Logowanie</p>
			<div className="deep-grey-text ">
				<MDBInput
					label="Email"
					icon="envelope"
					group
					type="email"
					validate
					error="wrong"
					success="right"
					onChange={handleEmailInput}
					value={loginValue}
				/>
				<MDBInput
					onChange={handlePasswordInput}
					label="Hasło"
					icon="lock"
					group
					type="password"
					value={passwordValue}
					validate
				/>
			</div>
			<div className="text-center loginButtonWrapper">
				<MDBBtn type="submit" className="loginButton buttonPrimary" onClick={submitLogin}>
					{isLoading && <Loader className="loginLoader" />}
					Login
				</MDBBtn>
			</div>
			{/* <div className="text-right">
				<p onClick={toggleForm}>Nie masz konta? Zarejestruj się</p>
			</div> */}
		</form>
	);
};

export default LoginForm;
