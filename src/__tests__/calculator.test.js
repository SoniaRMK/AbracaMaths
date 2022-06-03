import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains exactly 19 buttons', () => {
    render(<Calculator />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(19);
  });

  it('returns the correct result after the 2 button is clicked', () => {
    render(<Calculator />);
    const resultElement = screen.getByTestId(/results/);
    const twoButton = screen.getByText(/2/);

    fireEvent.click(twoButton);

    expect(resultElement).toHaveTextContent(2);
  });

  it('returns the correct result for addition operation', () => {
    render(<Calculator />);
    const resultElement = screen.getByTestId(/results/);
    const twoButton = screen.getByText(/2/);
    const plusButton = screen.getByText(/^[+]$/);
    const equalButton = screen.getByText(/=/);

    fireEvent.click(twoButton);
    fireEvent.click(plusButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalButton);

    expect(resultElement).toHaveTextContent(4);
  });

  it('returns the correct result for subtraction operation', () => {
    render(<Calculator />);
    const resultElement = screen.getByTestId(/results/);
    const twoButton = screen.getByText(/2/);
    const plusButton = screen.getByText(/^[-]$/);
    const equalButton = screen.getByText(/=/);

    fireEvent.click(twoButton);
    fireEvent.click(plusButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalButton);

    expect(resultElement).toHaveTextContent(0);
  });

  it('returns an error after division by 0 operation', () => {
    render(<Calculator />);
    const resultElement = screen.getByTestId(/results/);
    const threeButton = screen.getByText(/3/);
    const zeroButton = screen.getByText(/0/);
    const dividedByButton = screen.getByText(/^[÷]$/);
    const equalButton = screen.getByText(/=/);

    fireEvent.click(threeButton);
    fireEvent.click(dividedByButton);
    fireEvent.click(zeroButton);
    fireEvent.click(equalButton);

    expect(resultElement).toHaveTextContent("Can't divide by 0.");
  });

  it('returns an error after a modulo by 0 operation', () => {
    render(<Calculator />);
    const resultElement = screen.getByTestId(/results/);
    const threeButton = screen.getByText(/3/);
    const zeroButton = screen.getByText(/0/);
    const modeButton = screen.getByText(/^[%]$/);
    const equalButton = screen.getByText(/=/);

    fireEvent.click(threeButton);
    fireEvent.click(modeButton);
    fireEvent.click(zeroButton);
    fireEvent.click(equalButton);

    expect(resultElement).toHaveTextContent(
      "Can't find modulo as can't divide by 0.",
    );
  });
});
