import styled from 'styled-components';
import { media } from '../static/utils';

export const FooterWrap = styled.div`
  margin: -2.5rem auto 0;
  text-align: center;
  bottom: 0;
  right: 2rem;
  ${media.greaterThan('phablet')`
		position: fixed;
	`};
  ${media.greaterThan('tablet')`
		right: 5rem;
	`};
`;

export const IconContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  bottom: 4rem;
  right: 2rem;
  ${media.greaterThan('phablet')`
		position: fixed;
	`};
  ${media.greaterThan('tablet')`
		right: 4rem;
	`};
`;

export const Icon = styled.img`
  width: 25px;
  height: 100%;
  margin: 1rem;
  transform: translateY(0);
  transition: ${props => props.theme.transition};
  cursor: pointer;
  &:hover {
    transform: translateY(-7px);
    opacity: 0.6;
  }
`;
