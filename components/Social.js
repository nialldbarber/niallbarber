import Link from 'next/link';
import styled from 'styled-components';

const IconContainer = styled.div`
	margin: 0 auto;
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

const Icon = styled.img`
	max-width: 25px;
	width: 100%;
	height: 100%;
	margin: 1rem;
	transition: ${(props) => props.theme.transition};
	cursor: pointer;
	&:hover {
		opacity: .6;
	}
`;

const Social = () => {
	return (
		<IconContainer>
			<Link href="https://github.com/nialldbarber">
				<a>
					<Icon src="../static/github.svg" />
				</a>
			</Link>
			<Link href="https://www.instagram.com/nialldbarber/">
				<a>
					<Icon src="../static/instagram.svg" />
				</a>
			</Link>
			<Link href="https://www.linkedin.com/in/niall-barber/">
				<a>
					<Icon src="../static/linkedin.svg" />
				</a>
			</Link>
		</IconContainer>
	);
};
export default Social;
