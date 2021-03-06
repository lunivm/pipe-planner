import React from 'react';
import PropTypes from 'prop-types';

export const FilterItemStyles = Object.freeze({
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  light: 'light',
  dark: 'dark'
});

export function FlatGroupFilter(props) {
  const getClassNames = i => `btn btn-outline-${i.style}`;

  return (
    <div className="pp-flex pp-flex-sized">
      {(props.items || []).map(i =>
        <button type="button"
          key={i.id || [i.label, i.count].join('_')}
          style={{flexGrow: 1, flexShrink: 0, flexBasis: 0, whiteSpace: 'nowrap', padding: '0.1em', margin: '2px'}}
          title={i.label}
          className={getClassNames(i)}>{i.count}<br/><span style={{fontSize: '0.85em'}}>{i.label}</span></button>
      )}
    </div>
  );
}

FlatGroupFilter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    count: PropTypes.number.isRequired,
    id: PropTypes.string,
    style: PropTypes.oneOf(Object.values(FilterItemStyles)).isRequired,
    active: PropTypes.bool
  })).isRequired
};
