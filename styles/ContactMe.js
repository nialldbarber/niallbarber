import styled from 'styled-components';
import { media } from '../static/utils';

export const ContactMe = styled.div`
  margin-top: 8rem;
  p {
    font-size: 2.7rem;
    padding: 1rem 2rem;
    position: relative;
    display: inline;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
    color: ${props => props.theme.black};
    ${media.lessThan('tablet')`
			font-size: 2rem;
		`};
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 2px;
      background: ${props => props.theme.green};
    }
  }
`;
