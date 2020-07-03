import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		console.log(this.state);
	};

	render() {
		return (
			<div className="sign-in">
				<h2>Already have an account?</h2>
				<span>Sign in using your email and password</span>
				<form>
					<FormInput
						value={this.state.email}
						name="email"
						type="email"
						required
						label="Email"
						handleChange={this.handleChange}
					/>
					<FormInput
						value={this.state.password}
						name="password"
						type="password"
						label="Password"
						required
						handleChange={this.handleChange}
					/>
					<div className="buttons">
						<CustomButton type="submit" onClick={this.handleSubmit}>
							Sign In
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
