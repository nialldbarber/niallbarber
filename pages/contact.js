import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';

const ContactMe = styled.div`
	margin-top: 7rem;
	p {
		font-size: 2.7rem;
		padding: 1rem 2rem;
		position: relative;
		display: inline;
		z-index: 1;
		overflow: hidden;
		cursor: pointer;
		transition: .25s cubic-bezier(.895, .03, .685, .22);
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 0;
			height: 100%;
			z-index: -1;
			transition: .4s cubic-bezier(.77, 0, .175, 1);
			transform: translateX(-101%);
		}
		&:hover {
			&:before {
				left: 100%;
				width: 100%;
			}
			color: ${(props) => props.theme.black};
		}
		&:before {
			background: ${(props) => props.theme.green};
		}
	}
`;

const Contact = () => {
	return (
		<div>
			<PageHeader className="contact">Contact</PageHeader>
			<ContentInfo>
				<p>If you want to make or collaborate on a project send me a message!</p>
			</ContentInfo>
			<ContactMe className="contact-me">
				<p>nialldbarber@gmail.com</p>
			</ContactMe>
		</div>
	);
};

export default Contact;
