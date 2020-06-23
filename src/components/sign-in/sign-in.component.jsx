import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
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
					<CustomButton type="submit">Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
