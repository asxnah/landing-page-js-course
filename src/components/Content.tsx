import { forwardRef } from 'react';
import { DropDownListEl } from '../uikit/DropDownListEl';

const Content = forwardRef<HTMLElement, {}>((_, ref) => {
	interface ContentEl {
		heading: string;
		description: string;
	}

	const Content: ContentEl[] = [
		{
			heading: 'Module 1: JavaScript Fundamentals',
			description:
				'This module introduces the core building blocks of JavaScript, including variables, data types, operators, and control structures. Students learn how to write clean, efficient code and understand how JavaScript works behind the scenes. The lessons combine explanations with hands-on exercises that reinforce learning. By the end of this module, learners will be able to create basic programs, manipulate data, and confidently apply foundational concepts, providing a strong base for more advanced topics and real-world coding challenges.',
		},
		{
			heading: 'Module 2: DOM Manipulation & Events',
			description:
				'In this module, students explore how to make web pages interactive by manipulating the Document Object Model (DOM). Lessons cover selecting and modifying elements, handling user events, and dynamically updating content. Real-world examples help learners understand practical applications like interactive forms, menus, and animations. Through guided exercises, students practice responding to clicks, inputs, and other actions, gaining the skills needed to make websites responsive and engaging. By the end, learners can confidently control page behavior and create dynamic, user-friendly web experiences.',
		},
		{
			heading: 'Module 3: Asynchronous JavaScript',
			description:
				'This module dives into handling asynchronous operations in JavaScript using callbacks, promises, and async/await syntax. Students learn to work with APIs, fetch data from servers, and manage time-dependent operations without blocking program execution. Lessons include practical exercises such as fetching data from public APIs and building interactive features that rely on asynchronous events. By mastering these concepts, learners will handle real-world programming challenges more effectively, ensuring smoother web applications that respond efficiently to user actions and external data sources.',
		},
		{
			heading: 'Module 4: Advanced JavaScript Projects',
			description:
				'The final module focuses on applying everything learned in complex, real-world projects. Students build fully functional applications using modern JavaScript features, modular code, and best practices. Projects include interactive web apps, dynamic interfaces, and integration with external APIs. This hands-on approach ensures learners gain confidence and practical experience, bridging the gap between theory and real-world development. By completing this module, students can demonstrate their skills through polished projects, ready for portfolios, job applications, or personal growth as competent JavaScript developers.',
		},
	];

	return (
		<section className="courseContent" ref={ref}>
			<h1 className="courseContent__heading">Course content</h1>
			<ul className="courseContent__list">
				{Content.map((el) => {
					return (
						<DropDownListEl
							key={el.heading}
							heading={el.heading}
							description={el.description}
						/>
					);
				})}
			</ul>
		</section>
	);
});

export default Content;
