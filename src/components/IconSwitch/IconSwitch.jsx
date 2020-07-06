import React from 'react';
import PropTypes from 'prop-types';
import './IconSwitch.css';
import { ViewModule, ViewList } from '@material-ui/icons';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <button
      className="icon-switch__button"
      onClick={() => onSwitch(icon === 'view_module' ? 'view_list' : 'view_module')}
    >
      {icon === 'view_module' ? (
        <ViewModule />
      ) : (
        <ViewList />
      )}
    </button>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

export default IconSwitch;
