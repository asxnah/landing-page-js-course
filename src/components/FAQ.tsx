import { forwardRef } from 'react';
import { DropDownListEl } from '../uikit/DropDownListEl';

const FAQ = forwardRef<HTMLElement, {}>((_, ref) => {
	interface ListEl {
		question: string;
		answer: string;
	}

	const List: ListEl[] = [
		{
			question: 'What prior experience do I need?',
			answer:
				'Lessons are clear, engaging, and easy to follow for beginners and pros alike.',
		},
		{
			question: 'Can I access the course anytime?',
			answer:
				'Yes, all lessons are available 24/7 online for flexible learning.',
		},
		{
			question: 'Are there certificates?',
			answer:
				'Yes, you receive a completion certificate after finishing all modules.',
		},
	];

	return (
		<section className="faq" ref={ref}>
			<h2 className="faq__heading">FAQ</h2>
			<ul className="faq__list">
				{List.map((el) => {
					return (
						<DropDownListEl
							key={el.question}
							heading={el.question}
							description={el.answer}
							isFAQ={true}
						/>
					);
				})}
			</ul>
		</section>
	);
});
export default FAQ;
