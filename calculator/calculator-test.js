
describe('calculate monthly rate tests', function() {
  it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('151.74')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 12324,
    years: 8,
    rate: 10
  };
  expect(calculateMonthlyPayment(values)).toEqual('187.01');
});
});

it('should reject invalid inputs', function () {
  const values = {
    amount: 'one thousand',
    years: 'one',
    rate: 10
  };
  expect(() => getCurrentUIValues()).toThrowError();
})
