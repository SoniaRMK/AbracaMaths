import operate from '../logic/operate';

describe('operate', () => {
  it('expects 10 * 18 to be 180', () => {
    expect(operate('10', '18', 'x')).toEqual('180');
  });

  it('throws an error if operator is unknown', () => {
    expect(() => {
      operate('10', '18', 'y');
    }).toThrow("Unknown operation 'y'");
  });
});
