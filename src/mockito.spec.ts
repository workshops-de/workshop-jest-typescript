import { instance, mock, when } from 'ts-mockito';
import { CivilizationApi } from './mock.spec';
describe('Mockito', () => {
  describe('When a mock needs to be type safe', () => {
    it('use ts-mockito', async () => {
      const apiMock = mock(CivilizationApi);

      when(apiMock.getAll()).thenResolve([
        { id: 10, expansion: 'Globe', name: 'Chinese' }
      ]);

      const api = instance(apiMock);

      expect(await api.getAll()).toEqual([
        {
          id: 10,
          expansion: 'Globe',
          name: 'Chinese'
        }
      ]);
    });
  });
});
