import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';
import Page from '../components/Page';

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<PageTransition timeout={200} classNames="page-transition">
					<Page>
						<Component />
					</Page>
				</PageTransition>
				<style jsx global>{`
					.page-transition-enter {
						opacity: 0;
					}
					.page-transition-enter-active {
						opacity: 1;
						transition: opacity .2s ease-out;
					}
					.page-transition-exit {
						opacity: 1;
					}
					.page-transition-exit-active {
						opacity: 0;
						transition: opacity .2s ease-in-out;
					}
				`}</style>
			</Container>
		);
	}
}

export default MyApp;
