import styled from 'styled-components';
import { media } from '../utils';

export const theme = {
  fontFamily: "'Questrial', sans-serif",
  black: '#1e272d',
  offWhite: '#EDEDED',
  green: '#6cc',
  orange: '#f89b0e',
  pink: '#f95584',
  darkPink: '#ff1c68',
  maxWidth: '1100px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  transition: '.25s cubic-bezier(.895, .03, .685, .22)',
};

export const StyledPage = styled.div`
  color: ${props => props.theme.offWhite};
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
