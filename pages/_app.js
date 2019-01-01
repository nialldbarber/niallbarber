import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';
import withApolloClient from '../lib/with-apollo-client';
import { ApolloProvider } from 'react-apollo';

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
		const { Component, pageProps, apolloClient } = this.props;
		return (
			<Container>
				<ApolloProvider client={apolloClient}>
					<PageTransition timeout={200} classNames="page-transition">
						<Page>
							<Component {...pageProps} />
						</Page>
					</PageTransition>
				</ApolloProvider>
			</Container>
		);
	}
}

export default withApolloClient(MyApp);
