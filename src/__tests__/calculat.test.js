import calculate from "../logic/calculate";

describe("calculate", () => {
  it("cleans reinitialize the calculator object when AC button is clicked", () => {
    const calculatorObj = {
      total: "12",
      next: "2",
      operation: null,
    };
    const buttonName = "AC";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it("returns empty object when both numbers are 0", () => {
    const calculatorObj = {
      total: null,
      next: "0",
      operation: null,
    };
    const buttonName = "0";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({});
  });

  it("If there is an operation, update next", () => {
    const calculatorObj = {
      total: null,
      next: "2",
      operation: '+',
    };
    const buttonName = "3";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({
      next: "23",
      operation: "+",
      total: null,
    });
  });

  it("If there is no operation, update next and clear the value", () => {
    const calculatorObj = {
      total: null,
      next: "2",
      operation: null,
    };
    const buttonName = "3";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({
      next: "23",
      total: null,
    });
  });

  it("If buttonName is . and next includes a .", () => {
    const calculatorObj = {
      total: null,
      next: "2.9",
      operation: null,
    };
    const buttonName = ".";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({
      next: "2.9",
      operation: null,
      total: null,
    });
  });

  it("If buttonName is = and there is no operation", () => {
    const calculatorObj = {
      total: '3',
      next: "2",
      operation: null,
    };
    const buttonName = "=";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({});
  });

  it("If buttonName is +/- and there is no operation", () => {
    const calculatorObj = {
      total: null,
      next: "2",
      operation: null,
    };
    const buttonName = "+/-";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({
      next: "-2",
      operation: null,
      total: null,
    });
  });

  it("If buttonName is +/- and there is an operation", () => {
    const calculatorObj = {
      total: "3",
      next: null,
      operation: null,
    };
    const buttonName = "+/-";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({
      next: null,
      operation: null,
      total: '-3',
    });
  });

  it("If buttonName is +/- and there is an operation", () => {
    const calculatorObj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = "+/-";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({});
  });

  it("User pressed an operation after pressing '='", () => {
    const calculatorObj = {
      total: '6',
      next: null,
      operation: null,
    };
    const buttonName = "+";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({
      total: "6",
      next: null,
      operation: "+",
    });
  });

  it("User pressed an operation button and there is an existing operation", () => {
    const calculatorObj = {
      total: null,
      next: null,
      operation: "+",
    };
    const buttonName = "+";

    const newCalculatorObj = calculate(calculatorObj, buttonName);

    expect(newCalculatorObj).toEqual({
      operation: "+",
      total: 0,
    });
  });
});