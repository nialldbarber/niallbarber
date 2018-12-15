import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';

const ContactMe = styled.div`
	margin-top: 8rem;
	p {
		font-size: 2.7rem;
		padding: 1rem 2rem;
		position: relative;
		display: inline;
		z-index: 1;
		overflow: hidden;
		cursor: pointer;
		color: ${(props) => props.theme.black};
		@media (max-width: 767px) {
			font-size: 2rem;
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			background: ${(props) => props.theme.green};
		}
	}
`;

const Contact = () => {
	return (
		<div>
			<PageHeader className="contact">Contact</PageHeader>
			<ContentInfo>
				<p>
					If you need a bespoke website built, or even want to make/collaborate on a project then send me a
					message!
				</p>
			</ContentInfo>
			<ContactMe className="contact-me">
				<p>nialldbarber@gmail.com</p>
			</ContactMe>
		</div>
	);
};

export default Contact;
