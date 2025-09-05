import type { ChangeEvent } from 'react';

interface InputProps {
	placeholder: string;
	id: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	name?: string;
	required?: boolean;
	disabled?: boolean;
	error?: boolean;
	type?: 'text' | 'tel' | 'email';
}

export const Input = ({
	placeholder,
	id,
	value,
	onChange,
	name = id,
	required = true,
	disabled = false,
	error = false,
	type = 'text',
}: InputProps) => {
	return (
		<input
			type={type}
			placeholder={`${placeholder}${required ? ' *' : ''}`}
			title={`Enter ${placeholder.toLowerCase()}`}
			id={id}
			value={value}
			onChange={onChange}
			className={error ? 'error' : ''}
			name={name}
			required={required}
			disabled={disabled}
		/>
	);
};
