import Link from 'next/link';
import styled from 'styled-components';
import { title } from '../config';

const FooterWrap = styled.div`
	margin: -2.5rem auto 0;
	text-align: center;
	bottom: 0;
	right: 2rem;
	@media (min-width: 510px) {
		position: fixed;
	}
	@media (min-width: 768px) {
		right: 5rem;
	}
`;

const Footer = () => {
	return (
		<FooterWrap>
			<p>{`© ${new Date().getFullYear()} ${title}`}</p>
		</FooterWrap>
	);
};

export default Footer;
