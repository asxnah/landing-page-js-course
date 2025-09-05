import { forwardRef, useState, type FormEvent } from 'react';
import { Input } from '../uikit/Input';
import { Button } from '../uikit/Button';

interface SignUpFormProps {
	onSubmit: () => void;
	content: string;
}

const SignUpForm = forwardRef<HTMLFormElement, SignUpFormProps>(
	({ onSubmit, content }, ref) => {
		const [name, setName] = useState<string>('');
		const [email, setEmail] = useState<string>('');
		const [phone, setPhone] = useState<string>('');

		const submit = (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			onSubmit();
		};

		return (
			<form className="signUpForm" onSubmit={submit} ref={ref}>
				<h2 className="signUpForm__heading">Sign Up for the Course</h2>
				<div className="signUpForm__inputs">
					<Input
						placeholder="Name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						placeholder="Email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
					/>
					<Input
						placeholder="Phone"
						id="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						type="tel"
					/>
				</div>
				<Button
					content={content}
					type="submit"
					disabled={name === '' || email === '' || phone === ''}
				/>
			</form>
		);
	}
);

export default SignUpForm;
