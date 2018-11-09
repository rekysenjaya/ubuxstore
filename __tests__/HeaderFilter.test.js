/**
 * Sample React Native Snapshot Test
 */

'use strict';

import 'react-native';
import React from 'react';
import HeaderFilter from '../src/components/HeaderFilter';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

it('renders correctly', () => {
    const tree = renderer.create(<HeaderFilter
        cart={[]}
        data={[]}
        children={[]}
        search=""
        status=""
        actionSearch={() => console.log('')}
        actionStatus={() => console.log('')}
        setState={() => console.log('')}
        navigate={() => console.log('')} />).toJSON();
    expect(tree).toMatchSnapshot();
});
