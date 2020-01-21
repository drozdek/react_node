import React from 'react';
import {shallow} from 'enzyme'
import {cleanup, fireEvent, render} from '@testing-library/react';
import AddCampaign from '../components/AddCampaign';

import { create } from 'react-test-renderer';

describe('shuold add campaign with ', () => {
    it('cancels changes when user presses esc', done => {
        const wrapper = mount(<EditableText defaultValue="Hello" />);
        const input = AddCampaign.find('input');
    
        console.log(input.render().attr('value'));
        input.simulate('focus');
        done();
      });
});
