import { Button } from '../uikit/Button';

interface HeroProps {
	onClick: () => void;
}

const Hero = ({ onClick }: HeroProps) => {
	return (
		<section className="hero">
			<div className="hero__content">
				<h1 className="hero__heading">JavaScript Course</h1>
				<p className="hero__description">
					Learn new skills online from the experts
				</p>
				<Button onClick={onClick} />
			</div>
			<img
				className="hero__image"
				src="/assets/hero.png"
				alt="Female with long hair in blue shirt and pants smiling while using her laptop."
			/>
		</section>
	);
};

export default Hero;
