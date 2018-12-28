import styled from 'styled-components';
import ContentInfo from '../components/styles/Content';
import PageHeader from '../components/styles/PageHeader';
import PlatformSpan from '../components/styles/PlatformSpan';

const About = () => {
	return (
		<div>
			<PageHeader className="about">About</PageHeader>
			<ContentInfo>
				<p>
					Hi, I'm a front end developer. I make slick, fast websites using frameworks like{' '}
					<PlatformSpan className="reactSpan">React</PlatformSpan>,{' '}
					<PlatformSpan className="vueSpan">Vue</PlatformSpan> and also CMSs like{' '}
					<PlatformSpan className="wordpressSpan">WordPress, </PlatformSpan>{' '}
					<PlatformSpan className="shopifySpan">Shopify</PlatformSpan> and even dabble in{' '}
					<PlatformSpan className="wordpressSpan">GraphQL</PlatformSpan> CMSs 🚀
				</p>
				<p>Let's make something cool together!</p>
			</ContentInfo>
		</div>
	);
};

export default About;
