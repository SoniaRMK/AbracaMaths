import React, { useState, useEffect } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

import '../css/calculator.css';

function Calculator() {
  const [calcObject, setCalcObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  useEffect(() => {
    const responseElement = document.getElementById('results');
    const { total, next } = calcObject;
    responseElement.textContent = next || total;
  });

  const handleClick = (buttonName) => {
    setCalcObject((prevState) => {
      const newCalculatorObject = {
        ...prevState,
        ...calculate(prevState, buttonName),
      };
      return newCalculatorObject;
    });
  };

  return (
    <div className="container">
      <h2>Let&#39;s do some maths!</h2>
      <div className="calc-container">
        <div className="screen" id="results" data-testid="results">
          Results Here...
        </div>
        <Button
          cssClassName="btn"
          buttonText="AC"
          onButtonClick={handleClick}
        />
        <Button
          cssClassName="btn"
          buttonText="+/-"
          onButtonClick={handleClick}
        />
        <Button cssClassName="btn" buttonText="%" onButtonClick={handleClick} />
        <Button
          cssClassName="btn"
          buttonText="÷"
          orangeClassName="orange"
          onButtonClick={handleClick}
        />
        <Button cssClassName="btn" buttonText="7" onButtonClick={handleClick} />
        <Button cssClassName="btn" buttonText="8" onButtonClick={handleClick} />
        <Button cssClassName="btn" buttonText="9" onButtonClick={handleClick} />
        <Button
          cssClassName="btn"
          buttonText="x"
          orangeClassName="orange"
          onButtonClick={handleClick}
        />
        <Button cssClassName="btn" buttonText="4" onButtonClick={handleClick} />
        <Button cssClassName="btn" buttonText="5" onButtonClick={handleClick} />
        <Button cssClassName="btn" buttonText="6" onButtonClick={handleClick} />
        <Button
          cssClassName="btn"
          buttonText="-"
          orangeClassName="orange"
          onButtonClick={handleClick}
        />
        <Button cssClassName="btn" buttonText="1" onButtonClick={handleClick} />
        <Button cssClassName="btn" buttonText="2" onButtonClick={handleClick} />
        <Button cssClassName="btn" buttonText="3" onButtonClick={handleClick} />
        <Button
          cssClassName="btn"
          buttonText="+"
          orangeClassName="orange"
          onButtonClick={handleClick}
        />
        <Button
          cssClassName="btn"
          buttonText="0"
          orangeClassName="zero"
          onButtonClick={handleClick}
        />
        <Button cssClassName="btn" buttonText="." onButtonClick={handleClick} />
        <Button
          cssClassName="btn"
          buttonText="="
          orangeClassName="orange"
          onButtonClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Calculator;
