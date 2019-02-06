import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import Social from "./Social";
import Copyright from "./Copyright";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import { media } from "./utils/Breakpoints";
import { variablesInOperation } from "apollo-utilities";

const theme = {
	fontFamily: "'Questrial', sans-serif",
	black: "#1e272d",
	offWhite: "#EDEDED",
	green: "#6cc",
	orange: "#f89b0e",
	pink: "#f95584",
	darkPink: "#ff1c68",
	maxWidth: "1100px",
	bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
	transition: ".25s cubic-bezier(.895, .03, .685, .22)"
};

const StyledPage = styled.div`color: ${(props) => props.theme.offWhite};`;

const Inner = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 6rem auto 0;
	padding: 4rem 3rem;
	min-height: calc(100vh - 16rem);
	${media.lessThan("phablet")`
		padding: 4rem 2rem;
	`};
	${media.greaterThan("tablet")`
		padding: 7rem 4rem;
	`};
	${media.greaterThan("desktop")`
		padding: 2rem 4rem;
	`};
	${media.greaterThan("large")`
		max-width: 1200px;
	`};
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
		position: relative;
		margin: 0;
		padding: 0 0 5rem 0;
		font-size: 1.7rem;
		line-height: 2;
		-webkit-font-smoothing: antialiased;
		font-family: 'Questrial', sans-serif;
		font-family: ${theme.fontFamily};
		background: ${theme.black};
		color: ${theme.offWhite};
		overflow-x: hidden;
		${media.lessThan("phablet")`
			padding: 0;
		`};
		&:before {
			content: '';
			position: absolute;
			background: url('../static/background.svg');
			background-size: cover;
			height: 100%;
			width: 100%;
			opacity: 0.2;
			z-index: -1;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
	a {
		text-decoration: none;
		color: ${theme.offWhite};
	}
	.page-transition-enter {
		opacity: 0;
	}
	.page-transition-enter-active {
		opacity: 1;
		transition: opacity 0.2s ease-out;
	}
	.page-transition-exit {
		opacity: 1;
	}
	.page-transition-exit-active {
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}
	.bar {
		${media.lessThan("phablet")`
			width: 100vw;
			height: 9.6rem;
			position: fixed;
			top: 0;
			background: ${theme.black};
			z-index: 999;
			box-shadow: ${theme.bs};
		`};
	}
	.grid {
		display: flex;
		margin-top: 6rem;
		flex-wrap: wrap;
	}
	.box {
		width: 100px;
		height: 100px;
		background: ${theme.darkPink};
		transform-origin: 50% 50%;
	}
.about-page {
	span {
		position: relative;
		transition: ${theme.transition};
		&:before {
			content: '';
			position: absolute;
			left: 0;
			bottom: -.1rem;
			right: 0;
			height: 1px;
			z-index: -1;
		}
		&.reactSpan {
			&:before {
				background: ${theme.green};
			}
			&:hover {
				color: ${theme.green};
			}
		}
		&.vueSpan {
			&:before {
				background: ${theme.orange};
			}
			&:hover {
				color: ${theme.orange};
			}
		}
		&.wordpressSpan {
			&:before {
				background: ${theme.pink};
			}
			&:hover {
				color: ${theme.pink};
			}
		}
		&.shopifySpan {
			&:before {
				background: ${theme.green};
			}
			&:hover {
				color: ${theme.green};
			}
		}
	}
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
					<Social />
					<Copyright />
				</StyledPage>
			</ThemeProvider>
		);
	}
}
