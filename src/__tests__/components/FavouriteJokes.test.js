import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import FavouriteJokes from '../../components/favouriteJokes';

configure({ adapter: new Adapter() });

describe('FavouriteJokes', () => {
    
    let props = { savedJokes: [] };
    let favouriteJokes = shallow(<FavouriteJokes {...props}/>);

    it('renders properly', () => {
        expect(FavouriteJokes).toMatchSnapshot();
    });

    it('should not render if prop `savedJokes` is an empty array', () => {
        expect(favouriteJokes.get(0)).toBeFalsy()
    });

    describe('when joke length is not zero', () => {
        beforeEach(() => {
          props = { savedJokes: [{ "id": "25vBR41iRNiXVzm_-IGxag", "value": "this is a test joke" }] };
          favouriteJokes = shallow(<FavouriteJokes {...props}/>);
        });

        it('div with class `container` renders properly', () => {
            expect(favouriteJokes.find('h4').text()).toEqual('Favourite jokes:');
        });

    });
});