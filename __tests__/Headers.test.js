/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
import Headers from '../src/components/Headers';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

it('renders correctly', () => {
    const tree = renderer.create(<Headers
        cart={[]}
        children={[]}
        title=""
        goBack={() => console.log('')}
        navigate={() => console.log('')} />).toJSON();
    expect(tree).toMatchSnapshot();
});
