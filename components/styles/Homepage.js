import styled from 'styled-components';
import { media } from '../../static/utils';

export const HomepageSplash = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  width: 100px;
  display: flex;
  align-self: center;
  margin: 0 auto;
  padding-bottom: 6rem;
`;

export const TypedWrapper = styled.div`
  text-align: center;
  span {
    font-size: 3rem;
    background: ${props => props.theme.green};
    color: ${props => props.theme.black};
    padding: 1rem 0.5rem;
    box-shadow: ${props => props.theme.bs};
    border-radius: 2px;
    ${media.lessThan('tablet')`
			font-size: 2rem;
		`};
  }
`;
