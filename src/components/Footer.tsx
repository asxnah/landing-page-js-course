import { Github } from '../assets/icons/Github';
import { Email } from '../assets/icons/Email';
import { VK } from '../assets/icons/VK';

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footerContent">
				<p className="footer__credit">© asxnah</p>
				<div className="footer__links">
					<a
						href="https://github.com/asxnah"
						title="Link to website author's Github"
						target="_blank"
					>
						<Github />
					</a>
					<a
						href="https://vk.com/id187555807"
						title="Link to website author's VK"
						target="_blank"
					>
						<VK />
					</a>
					<a
						href="mailto:calapenaw@yandex.ru"
						title="Link to write an email to the website author"
						target="_blank"
					>
						<Email />
					</a>
				</div>
			</div>
		</footer>
	);
};
