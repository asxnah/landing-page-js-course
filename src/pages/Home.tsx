import { Header } from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Content from '../components/Content';
import Reviews from '../components/Reviews';
import SignUpForm from '../components/SignUpForm';
import FAQ from '../components/FAQ';
import { Footer } from '../components/Footer';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
	const [sent, setSent] = useState<boolean>(false);
	const [content, setContent] = useState<string>('Sign Up');
	const [scrollTarget, setScrollTarget] = useState<
		'about' | 'signup' | 'content' | 'reviews' | 'faq' | null
	>();
	const aboutRef = useRef<HTMLElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
	const contentRef = useRef<HTMLElement>(null);
	const reviewsRef = useRef<HTMLElement>(null);
	const FAQRef = useRef<HTMLElement>(null);

	useEffect(() => {
		switch (scrollTarget) {
			case 'about':
				aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'signup':
				formRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'content':
				contentRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'reviews':
				reviewsRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'faq':
				FAQRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			default:
				break;
		}
		setScrollTarget(null);
	}, [scrollTarget]);

	useEffect(() => {
		if (sent) {
			setContent('Request sent');
			setTimeout(() => {
				setSent(false);
			}, 3000);
		}
		if (!sent) {
			setContent('Sign Up');
		}
	}, [sent]);

	return (
		<>
			<Header
				onAboutClick={() => setScrollTarget('about')}
				onSignUpClick={() => setScrollTarget('signup')}
				onContentClick={() => setScrollTarget('content')}
				onReviewsClick={() => setScrollTarget('reviews')}
				onFAQClick={() => setScrollTarget('faq')}
			/>
			<main>
				<Hero onClick={() => setScrollTarget('signup')} />
				<About ref={aboutRef} />
				<SignUpForm
					content={content}
					onSubmit={() => setSent(true)}
					ref={formRef}
				/>
				<Content ref={contentRef} />
				<Reviews ref={reviewsRef} />
				<FAQ ref={FAQRef} />
			</main>
			<Footer />
		</>
	);
}
