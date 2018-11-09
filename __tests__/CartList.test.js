/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
import CartList from '../src/components/CartList';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

it('renders correctly', () => {
    const tree = renderer.create(<CartList cart={[]} cartDelete={() => console.log('run')} />).toJSON();
    expect(tree).toMatchSnapshot();
});