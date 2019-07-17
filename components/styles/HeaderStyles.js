import styled from 'styled-components';
import { media } from '../../static/utils';

export const Logo = styled.div`
  position: fixed;
  top: 1rem;
  left: 3rem;
  padding: 0 2rem;
  z-index: 999;
  cursor: pointer;
  transition: transform 0.1s cubic-bezier(0, 1.8, 1, 1.8);
  transform: translateY(0.7em);
  &:hover {
    transform: translateY(1em) rotate(-2deg) scale(1.15);
  }
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
