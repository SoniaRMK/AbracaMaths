import React, { Component } from 'react';
import Button from './Button';

import '../css/calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calc-container">
          <div className="screen">0</div>
          <Button cssClassName="btn" buttonText="AC" />
          <Button cssClassName="btn" buttonText="+/-" />
          <Button cssClassName="btn" buttonText="%" />
          <Button cssClassName="btn" buttonText="÷" orangeClassName="orange" />
          <Button cssClassName="btn" buttonText="7" />
          <Button cssClassName="btn" buttonText="8" />
          <Button cssClassName="btn" buttonText="9" />
          <Button cssClassName="btn" buttonText="x" orangeClassName="orange" />
          <Button cssClassName="btn" buttonText="4" />
          <Button cssClassName="btn" buttonText="5" />
          <Button cssClassName="btn" buttonText="6" />
          <Button cssClassName="btn" buttonText="-" orangeClassName="orange" />
          <Button cssClassName="btn" buttonText="1" />
          <Button cssClassName="btn" buttonText="2" />
          <Button cssClassName="btn" buttonText="3" />
          <Button cssClassName="btn" buttonText="+" orangeClassName="orange" />
          <Button cssClassName="btn" buttonText="0" orangeClassName="zero" />
          <Button cssClassName="btn" buttonText="." />
          <Button cssClassName="btn" buttonText="=" orangeClassName="orange" />
        </div>
      </div>
    );
  }
}

export default Calculator;
