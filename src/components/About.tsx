import { forwardRef } from 'react';
import { Check } from '../assets/icons/Check';
import { Case } from '../assets/icons/Case';
import { User } from '../assets/icons/User';

const About = forwardRef<HTMLElement, {}>((_, ref) => {
	return (
		<section className="about" ref={ref}>
			<h2 className="about__heading">About the Course</h2>
			<p className="about__description">
				Our JavaScript course combines engaging, hands-on lessons with expert
				guidance and round-the-clock support
			</p>
			<ul className="about__list">
				<li className="about__list__el">
					<Check className="about__list__el__icon" />
					<div className="about__list__el__text">
						<h4 className="about__list__el__heading">Interactive Lessions</h4>
						<p className="about__list__el__description">
							Hands-on coding challenges daily
						</p>
					</div>
				</li>
				<li className="about__list__el">
					<Case className="about__list__el__icon" />
					<div className="about__list__el__text">
						<h4 className="about__list__el__heading">Expert Instructions</h4>
						<p className="about__list__el__description">
							Step-by-step professional guidance
						</p>
					</div>
				</li>
				<li className="about__list__el">
					<User className="about__list__el__icon" />
					<div className="about__list__el__text">
						<h4 className="about__list__el__heading">24/7 Support</h4>
						<p className="about__list__el__description">
							Instant help anytime needed
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
});

export default About;
