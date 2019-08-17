import React from 'react';
import PropTypes from 'prop-types';
import { ModeSelect } from '../styles/ModeSelect';
import { LIGHT_MODE } from '../static/constants';
import sun from '../static/sun.svg';
import moon from '../static/moon.svg';

const NightMode = ({ modeType, modeSelect }) => (
  <ModeSelect>
    <img src={sun} id="sun" alt="sun" />
    <img src={moon} id="moon" alt="moon" />
    <label className="switcher" htmlFor="mode-select">
      <input
        type="checkbox"
        onClick={modeSelect}
        id="mode-select"
        checked={modeType === LIGHT_MODE}
      />
      <span className="slider" />
    </label>
  </ModeSelect>
);

export default NightMode;

NightMode.propTypes = {
  modeType: PropTypes.string,
  modeSelect: PropTypes.func,
};
