import { useState } from 'react';
import { ArrowDown } from '../assets/icons/ArrowDown';
import { Search } from '../assets/icons/Search';

interface DropDownListElProps {
	heading: string;
	description: string;
	isFAQ?: boolean;
}

export const DropDownListEl = ({
	heading,
	description,
	isFAQ = false,
}: DropDownListElProps) => {
	const [descriptionShown, setDescriptionShown] = useState<boolean>(false);

	return (
		<li className="dropDownListEl">
			<div className="dropDownListEl__header">
				<div className="dropDownListEl__headerContent">
					{isFAQ && (
						<Search
							className="dropDownListEl__headerContent__svg"
							aria-hidden="true"
						/>
					)}
					<h3 className="dropDownListEl__heading">{heading}</h3>
				</div>
				<button
					className={`dropDownListEl__button${
						descriptionShown ? '--upsideDown' : ''
					}`}
					title="Click to open description"
					aria-label="Button to open description"
					onClick={() => setDescriptionShown(!descriptionShown)}
				>
					<ArrowDown />
				</button>
			</div>
			<p
				className={`dropDownListEl__description--${
					descriptionShown ? 'shown' : 'hidden'
				}`}
			>
				{description}
			</p>
		</li>
	);
};
