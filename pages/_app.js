import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';

import Page from '../components/Page';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
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
            <Component {...pageProps} />
          </Page>
        </PageTransition>
      </Container>
    );
  }
}

export default MyApp;
