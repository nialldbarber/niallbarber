import styled from 'styled-components';
import { media } from '../../static/utils';

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
    width: 60px;
    height: 32px;
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: #f95584;
      border-radius: 18px;
      transition: 0.08s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0s;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 3px;
        background-color: ${props => props.theme.black};
        width: 28px;
        height: 28px;
        border-radius: 50%;
        transform: translateY(-50%);
        transition: 0.125s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0s;
      }
    }
  }

  input {
    -webkit-appearance: none;
    &:checked {
      & + .slider {
        &:before {
          background-color: ${props => props.theme.offWhite};
          transform: translateX(26px) translateY(-50%);
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
