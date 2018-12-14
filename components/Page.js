import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
	black: '#1e272d',
	offWhite: '#EDEDED',
	green: '#6cc',
	orange: '#f89b0e',
	pink: '#f95584',
	maxWidth: '1100px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`color: ${(props) => props.theme.offWhite};`;

const Inner = styled.div`
	max-width: ${(props) => props.theme.maxWidth};

	margin: 6rem auto 0;
	padding: 2rem 4rem;
`;

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Questrial');
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.7rem;
		line-height: 2;
		-webkit-font-smoothing: antialiased;
		font-family: 'Questrial', sans-serif;
		background-color: #1e272d;
		color: ${theme.offWhite};
	}
	a {
		text-decoration: none;
		color: ${theme.offWhite};
	}
	.grid {
		display: flex;
		margin-top: 3rem;
	}
`;

export default class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}
