import React from 'react';
import PropTypes from 'prop-types';
import { ModeSelect } from './styles/ModeSelect';
import { LIGHT_MODE } from '../static/constants';

export default function NightMode({ modeType, modeSelect }) {
  return (
    <>
      <ModeSelect>
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
    </>
  );
}

NightMode.propTypes = {
  modeType: PropTypes.string,
  modeSelect: PropTypes.func,
};
