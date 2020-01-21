//const App = require('../src/App')

import  App  from '../App';
import React from 'react';
import { create } from 'react-test-renderer';
describe('shold app be ', () => {
    it('be json', () => {
        //var a = 1;
        //expect(a).toEqual(2);
        let tree = create(<App />);
        expect(tree.toJSON()).toMatchSnaptshot();
    })
});
