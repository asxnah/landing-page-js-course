import { forwardRef, useState, type FormEvent } from 'react';
import DOMPurify from 'dompurify';
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

		const sanitize = (value: string, field: 'name' | 'email' | 'phone') => {
			const sanitizedValue = DOMPurify.sanitize(value);
			switch (field) {
				case 'name':
					setName(sanitizedValue);
					break;
				case 'email':
					setEmail(sanitizedValue);
					break;
				case 'phone':
					setPhone(sanitizedValue);
					break;
				default:
					break;
			}
		};

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
						onChange={(e) => sanitize(e.target.value, 'name')}
					/>
					<Input
						placeholder="Email"
						id="email"
						value={email}
						onChange={(e) => sanitize(e.target.value, 'email')}
						type="email"
					/>
					<Input
						placeholder="Phone"
						id="phone"
						value={phone}
						onChange={(e) => sanitize(e.target.value, 'phone')}
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
