import React from 'react';
import PropTypes from 'prop-types';
import { ModeSelect, ModeType } from './styles/ModeSelect';
import sun from '../static/sun.svg';
import moon from '../static/moon.svg';

export default function NightMode({ modeType, modeSelect }) {
  return (
    <>
      <ModeSelect>
        <label className="switcher" htmlFor="mode-select">
          <input
            type="checkbox"
            onClick={modeSelect}
            id="mode-select"
            checked={modeType === 'light'}
          />
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
