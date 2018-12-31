import styled from 'styled-components';

const ColouredLink = styled.a`
	position: relative;
	padding: 1rem 2rem;
	margin: 0 1rem;
	text-decoration: none;
	z-index: 1;
	overflow: hidden;
	cursor: pointer;
	transition: ${props => props.theme.transition};
	@media (max-width: 320px) {
		padding: 1rem 0;
		font-size: 1.5rem;
	}
	@media (min-width: 321px) and (max-width: 509px) {
		padding: 1rem 0;
		font-size: 1.8rem;
	}
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		z-index: -1;
		transition: ${props => props.theme.transition};
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
				color: ${props => props.theme.black};
			}
		}
	}
	&.home__nav {
		@media (max-width: 767px) {
			display: none;
		}
		&:before {
			background: ${props => props.theme.green};
		}
		&.active {
			@media (min-width: 768px) {
				background: ${props => props.theme.green};
				color: ${props => props.theme.black};
			}
		}
	}
	&.about__nav {
		&:before {
			background: ${props => props.theme.orange};
		}
		&.active {
			@media (min-width: 768px) {
				background: ${props => props.theme.orange};
				color: ${props => props.theme.black};
			}
		}
	}
	&.projects__nav {
		&:before {
			background: ${props => props.theme.pink};
		}
		&.active {
			@media (min-width: 768px) {
				background: ${props => props.theme.pink};
				color: ${props => props.theme.black};
			}
		}
	}
	&.contact__nav {
		&:before {
			background: ${props => props.theme.green};
		}
		&.active {
			@media (min-width: 768px) {
				background: ${props => props.theme.green};
				color: ${props => props.theme.black};
			}
		}
	}
`;

export default ColouredLink;
