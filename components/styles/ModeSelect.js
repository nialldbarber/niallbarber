import styled from 'styled-components';
import { media } from '../utils';

export const ModeSelect = styled.div`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  ${media.greaterThan('tablet')`
		left: 4rem;
	`};
  .switcher {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    background: ${props => props.theme.offWhite};
    border-radius: 12px;
    box-shadow: ${props => props.theme.bs};
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: ;
      border-radius: 35px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
      transition: ${props => props.theme.transition};
      &:hover {
        &:before {
          width: 24px;
          height: 24px;
          left: -2px;
        }
      }
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        background-color: ${props => props.theme.pink};
        width: 22px;
        height: 22px;
        border-radius: 50%;
        box-shadow: ${props => props.theme.bs};
        transform: translateY(-50%);
        transition: ${props => props.theme.transition};
      }
    }
  }
  input {
    -webkit-appearance: none;
    &:checked {
      & + .slider {
        &:before {
          background-color: ${props => props.theme.pink};
          transform: translateX(100%) translateY(-50%);
        }
      }
    }
  }
`;

export const ModeType = styled.img`
  position: fixed;
  left: 2.3rem;
  bottom: 5rem;
  ${media.greaterThan('tablet')`
		left: 4.3rem;
	`};
  width: 35px;
`;
