describe('Subsets', () => {
  describe('match', () => {
    it('exists in object', () => {
      const dictionary = { firstName: 'Alan', lastName: 'Turing' };

      expect(dictionary).toEqual(
        expect.objectContaining({ lastName: 'Turing' })
      );
    });

    it('exists in array', () => {
      const collection = [
        { firstName: 'Alan', lastName: 'Turing' },
        { firstName: 'Mike', lastName: 'Woodger' }
      ];

      expect(collection).toEqual(
        expect.arrayContaining([{ firstName: 'Mike', lastName: 'Woodger' }])
      );
    });
  });

  describe('not match', () => {
    it('not exists in object', () => {
      const dictionary = { firstName: 'Alan', lastName: 'Turing' };

      expect(dictionary).toEqual(
        expect.not.objectContaining({ lastName: 'Woodger' })
      );
    });
  });

  it('not exists in array', () => {
    const collection = [
      { firstName: 'Alan', lastName: 'Turing' },
      { firstName: 'Mike', lastName: 'Woodger' }
    ];

    expect(collection).toEqual(
      expect.not.arrayContaining([{ firstName: 'Jerry', lastName: 'Roberts' }])
    );
  });
});
