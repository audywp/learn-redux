import * as React from 'react';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../src/Helpers/reduxTesting';
import Home from '../../src/screens/Home';

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

describe('Name of the group', () => {
  describe('1', () => {
    test('should render', () => {
      const component = create(ContainerTesting(<Home />));
      const root = component.root;
      const {Global} = root.props.store.getState();
      expect(root.props.store).toBeTruthy();
      expect(Global).toBeTruthy();
      expect(typeof Global.token).toEqual('string');

      expect(component).toMatchSnapshot();
    });
  });
});
