import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import Social from './Social';
import Copyright from './Copyright';
import NightMode from './NightMode';
import { media } from './utils';
import { theme, StyledPage, Inner } from './styles/BaseStyles';

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
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
		background: ${theme.black};
		color: ${theme.offWhite};
		overflow-x: hidden;
    transition: .25s ease-in-out;
		${media.lessThan('phablet')`
			padding: 0;
		`};
    &.day {
      background: ${theme.offWhite};
      color: ${theme.black};
      h1, h2, h3, h4, p, a, span {
        color: ${theme.black};
      }
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
		${media.lessThan('phablet')`
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

export default function Page({ children }) {
  const [mode, setMode] = useState(true);

  const handleClick = () => {
    setMode(!mode);
    document.body.classList.toggle('day');
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        <NightMode modeType={mode} modeSelect={handleClick} />
        <Inner>{children}</Inner>
        <Social />
        <Copyright />
      </StyledPage>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
