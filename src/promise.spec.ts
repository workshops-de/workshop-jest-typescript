import fetch from 'node-fetch';

interface Civilization {
  id: number;
  name: string;
  expansion: string;
  // tbc.
}

describe('Promise | Age of Empires II', () => {
  // API: https://age-of-empires-2-api.herokuapp.com/docs/#/resources/civilizations
  describe('Loading all civilizations', () => {
    it('yields a collection', async () => {
      const result = await fetch(
        'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
      );

      const json: { civilizations: Civilization[] } = await result.json();
      const aztects = json.civilizations.find(civil => civil.name === 'Aztecs');

      expect(aztects).toBeDefined();
    });
  });

  describe('Passing an invalid civilization id', () => {
    it('yields an error', async () => {
      const result = await fetch(
        'https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/no-match'
      );

      expect(result.status).toBe(404);
    });
  });
});
