describe('Snapshot', () => {
  describe('When the application starts', () => {
    it('displays the current version', () => {
      const version = '1.1';
      const mockTemplate = `<header>Version ${version}</header>`;

      expect(mockTemplate).toMatchSnapshot();
    });
  });
});
