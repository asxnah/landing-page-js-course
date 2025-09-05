import { Button } from '../uikit/Button';

interface HeaderProps {
	onSignUpClick: () => void;
	onAboutClick: () => void;
	onContentClick: () => void;
	onReviewsClick: () => void;
	onFAQClick: () => void;
}

export const Header = ({
	onSignUpClick,
	onAboutClick,
	onContentClick,
	onReviewsClick,
	onFAQClick,
}: HeaderProps) => {
	return (
		<header className="header">
			<div className="headerContent">
				<nav>
					<ul className="header__nav">
						<li>
							<button onClick={onAboutClick} className="header__nav__link">
								About the Course
							</button>
						</li>
						<li>
							<button onClick={onContentClick} className="header__nav__link">
								Course content
							</button>
						</li>
						<li>
							<button onClick={onReviewsClick} className="header__nav__link">
								What Students Say
							</button>
						</li>
						<li>
							<button onClick={onFAQClick} className="header__nav__link">
								FAQ
							</button>
						</li>
					</ul>
				</nav>
				<Button type="small" onClick={onSignUpClick} />
			</div>
		</header>
	);
};
