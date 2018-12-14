import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';
import PlatformSpan from '../components/styles/PlatformSpan';

const About = (props) => {
	return (
		<div>
			<PageHeader className="about">About</PageHeader>
			<ContentInfo>
				<p>
					Hi, I'm a front end developer. I make slick, fast websites using technologies like{' '}
					<PlatformSpan className="reactSpan">React</PlatformSpan>,{' '}
					<PlatformSpan className="vueSpan">Vue</PlatformSpan> and also CMS like{' '}
					<PlatformSpan className="wordpressSpan">WordPress</PlatformSpan> and{' '}
					<PlatformSpan className="shopifySpan">Shopify</PlatformSpan>
				</p>
				<p>Let's make something cool together!</p>
			</ContentInfo>
		</div>
	);
};

export default About;
