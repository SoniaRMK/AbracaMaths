import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.buttonText = props.buttonText;
    this.orangeClassName = props.orangeClassName;
    this.cssClassName = props.cssClassName;
  }

  render() {
    return (
      <button
        type="button"
        className={`${this.orangeClassName} ${this.cssClassName}`}
      >
        {this.buttonText}
      </button>
    );
  }
}

Button.defaultProps = {
  orangeClassName: '',
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  orangeClassName: PropTypes.string,
  cssClassName: PropTypes.string.isRequired,
};
