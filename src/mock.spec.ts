import fetch from 'node-fetch';

export interface Civilization {
  id: number;
  name: string;
  expansion: string;
  // tbc.
}

export class CivilizationApi {
  constructor(private http: typeof fetch) {}

  async getAll(): Promise<Civilization[]> {
    return await this.http(
      'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
    )
      .then(response => response.json())
      .then(json => json.civilizations);
  }
}

describe('Mock', () => {
  describe('When no real API call should be made', () => {
    it('should use a mock', async () => {
      const fetchMock = jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve({ civilizations: [] }) })
      );

      const api = new CivilizationApi(fetchMock as any);

      const civilizations = await api.getAll();

      expect(civilizations.length).toBe(0);
    });
  });
});
