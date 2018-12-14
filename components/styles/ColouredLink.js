import styled from 'styled-components';

const ColouredLink = styled.a`
	position: relative;
	padding: 1rem 2rem;
	margin: 0 1rem;
	text-decoration: none;
	z-index: 1;
	overflow: hidden;
	cursor: pointer;
	transition: ${(props) => props.theme.transition};
	@media (max-width: 509px) {
		padding: 1rem 0;
		font-size: 1.5rem;
	}
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		z-index: -1;
		transition: ${(props) => props.theme.transition};
		transform: translateX(-101%);
	}
	&:hover {
		&:before {
			@media (min-width: 768px) {
				left: 100%;
				width: 100%;
			}
		}
		&.home__nav,
		&.about__nav,
		&.projects__nav,
		&.contact__nav {
			@media (min-width: 768px) {
				color: ${(props) => props.theme.black};
			}
		}
	}
	&.home__nav {
		&:before {
			background: ${(props) => props.theme.green};
		}
	}
	&.about__nav {
		&:before {
			background: ${(props) => props.theme.orange};
		}
	}
	&.projects__nav {
		&:before {
			background: ${(props) => props.theme.pink};
		}
	}
	&.contact__nav {
		&:before {
			background: ${(props) => props.theme.green};
		}
	}
`;

export default ColouredLink;
