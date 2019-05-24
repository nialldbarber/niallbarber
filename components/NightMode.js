import React from 'react';
import PropTypes from 'prop-types';
import { ModeSelect, ModeType } from './styles/ModeSelect';
import sun from '../static/sun.svg';
import moon from '../static/moon.svg';

export default function NightMode({ modeType, modeSelect }) {
  return (
    <>
      <ModeType src={modeType === false ? sun : moon} alt="mode type" />
      <ModeSelect className="button-container">
        <label htmlFor="mode-select" className="switcher">
          <input type="checkbox" id="mode-select" onClick={modeSelect} />
          <span className="slider" />
        </label>
      </ModeSelect>
    </>
  );
}

NightMode.propTypes = {
  modeType: PropTypes.bool,
  modeSelect: PropTypes.func,
};
