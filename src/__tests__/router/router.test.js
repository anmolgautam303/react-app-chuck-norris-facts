import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import Router from '../../router/router';

configure({ adapter: new Adapter() });

describe('Router', () => {
    let props = { };
    let router = shallow(<Router {...props}/>);

    it('renders properly', () => {
        expect(Router).toMatchSnapshot();
    });
});