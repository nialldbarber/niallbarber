import styled from 'styled-components';
import { media } from '../utils';

export const Logo = styled.div`
  position: fixed;
  top: 1rem;
  left: 3rem;
  padding: 0 2rem;
  z-index: 999;
  ${media.lessThan('tablet')`
		padding: 1rem 2rem 1rem 0;
	`};
  ${media.lessThan('phablet')`
		margin-left: -1rem;
	`};
`;

export const LogoHeader = styled.img`
  width: 70px;
  opacity: 1;
  transition: ${props => props.theme.transition};
  &:hover {
    opacity: 0.8;
  }
  ${media.lessThan('tablet')`
		width: 60px;
	`};
`;

export const NavBar = styled.div`
  position: fixed;
  top: 2.8rem;
  right: 3rem;
  z-index: 999;
  ${media.lessThan('phablet')`
		right: 2rem;
		top: 3.1rem;
	`};
`;
