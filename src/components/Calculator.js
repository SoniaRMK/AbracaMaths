import React, { Component } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

import '../css/calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { object: { total: null, next: null, operation: null } };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { object } = this.state;
    const newObject = {
      ...object,
      ...calculate(object, buttonName),
    };
    this.setState({ object: newObject });
  }

  render() {
    const { object } = this.state;
    const response = object.next || object.total;

    return (
      <div className="container">
        <div className="calc-container">
          <div className="screen">{response}</div>
          <Button cssClassName="btn" buttonText="AC" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="+/-" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="%" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="÷" orangeClassName="orange" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="7" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="8" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="9" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="x" orangeClassName="orange" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="4" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="5" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="6" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="-" orangeClassName="orange" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="1" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="2" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="3" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="+" orangeClassName="orange" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="0" orangeClassName="zero" onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="." onButtonClick={this.handleClick} />
          <Button cssClassName="btn" buttonText="=" orangeClassName="orange" onButtonClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
