import { forwardRef } from 'react';

const Reviews = forwardRef<HTMLElement, {}>((_, ref) => {
	return (
		<section className="reviews" ref={ref}>
			<h2 className="reviews__heading">What Students Say</h2>
			<ul className="reviewsList">
				<li className="reviewsList__el">
					<p className="reviewsList__el__review">
						This course transformed my coding skills in just a few weeks, highly
						recommended!
					</p>
					<div className="reviewsList__el__author">
						<img
							className="reviewsList__el__author__icon"
							src="./assets/AvatarMalePortrait.png"
							alt="Avatar Male Portrait"
						/>
						<h4 className="reviewsList__el__author__name">Alex T.</h4>
					</div>
				</li>
				<li className="reviewsList__el">
					<p className="reviewsList__el__review">
						Lessons are clear, engaging, and easy to follow for beginners and
						pros alike.
					</p>
					<div className="reviewsList__el__author">
						<img
							className="reviewsList__el__author__icon"
							src="./assets/AvatarFemalePortrait.png"
							alt="Avatar Female Portrait"
						/>
						<h4 className="reviewsList__el__author__name">Priya S.</h4>
					</div>
				</li>
			</ul>
		</section>
	);
});
export default Reviews;
