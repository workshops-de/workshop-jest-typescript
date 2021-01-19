describe('it.each', () => {
  describe('When you need to test the same case with different data', () => {
    it.each([{ name: 'Anderson' }, { name: 'Leicester' }])(
      'you should use it.each [%p]',
      customer => {
        expect(customer.name.length).toBeGreaterThan(3);
      }
    );
  });

  describe('When you want to have a better overview over your data', () => {
    it.each`
      name           | age
      ${'Scott'}     | ${18}
      ${'Peterson'}  | ${42}
      ${'Leicester'} | ${93}
      ${'Anderson'}  | ${38}
    `(
      'you should use the tagged template syntax ($name, $age)',
      (customer: { name: string; age: number }) => {
        // Be aware that you TypeScript is not able to automatically infer
        // the type of your test data now.
        expect(customer.name.length).toBeGreaterThan(3);
      }
    );
  });
});
