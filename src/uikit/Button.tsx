interface ButtonProps {
	type?: 'small' | 'standard' | 'submit';
	content?: string;
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = ({
	content = 'Sign Up',
	type = 'standard',
	disabled = false,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={`button--colored--${type}`}
			type={type === 'submit' ? 'submit' : 'button'}
			onClick={onClick}
			disabled={disabled}
		>
			{content}
		</button>
	);
};
