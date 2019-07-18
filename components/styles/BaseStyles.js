import styled from 'styled-components';
import { media } from '../../static/utils';

export const theme = {
  fontFamily: "'Questrial', sans-serif",
  black: '#1e272d',
  offWhite: '#fff',
  green: '#6cc',
  orange: '#f89b0e',
  pink: '#f95584',
  darkPink: '#ff1c68',
  maxWidth: '1100px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  gradient: `linear-gradient(
    to top right,
    rgba(102, 204, 204, 0.25),
    rgba(249, 85, 132, 0.25),
    rgba(248, 155, 14, 0.25)
  )`,
  transition: '.25s cubic-bezier(.895, .03, .685, .22)',
};

export const StyledPage = styled.div`
  background-image: ${props => props.theme.gradient};
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.offWhite};
  transition: 0.2s ease;

  &:before {
    content: '';
    background-image: ${props => props.theme.gradient};
    background-color: ${props => props.theme.black};
    position: absolute;
    top: -6rem;
    left: 0;
    bottom: -6rem;
    right: 0;
    z-index: -1;
    transition: 0.2s ease;
  }

  &.day {
    background: ${theme.offWhite};
    background-image: transparent;
    color: ${theme.black};
    h1,
    h2,
    h3,
    h4,
    p,
    a,
    span {
      color: ${theme.black};
    }

    &:before {
      background: ${theme.offWhite};
    }
  }
`;

export const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 6rem auto 0;
  padding: 4rem 3rem;
  min-height: calc(100vh - 16rem);
  ${media.lessThan('phablet')`
		padding: 4rem 2rem;
	`};
  ${media.greaterThan('tablet')`
		padding: 7rem 4rem;
	`};
  ${media.greaterThan('desktop')`
		padding: 2rem 4rem;
	`};
  ${media.greaterThan('large')`
		max-width: 1200px;
	`};
`;
