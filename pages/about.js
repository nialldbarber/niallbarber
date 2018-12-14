import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';

const Header = styled.h1`
	position: relative;
	display: inline;
	font-size: 6rem;
	@media (min-width: 768px) {
		font-size: 11rem;
	}
	@media (min-width: 992px) {
		font-size: 17rem;
	}
	&:before {
		content: '';
		position: absolute;
		background: ${(props) => props.theme.orange};
		left: 0;
		bottom: 1rem;
		right: 0;
		height: 5px;
		z-index: -1;
		@media (max-width: 767px) {
			bottom: 0;
			height: 3px;
		}
	}
`;

const About = (props) => {
	return (
		<div>
			<Header>About</Header>
			<ContentInfo>
				<p>
					Hi, I'm a front end developer. I make slick, fast websites using technologies like React, Vue and
					also CMS like WordPress and Shopify
				</p>
				<p>Let's make something cool together!</p>
			</ContentInfo>
		</div>
	);
};

export default About;
