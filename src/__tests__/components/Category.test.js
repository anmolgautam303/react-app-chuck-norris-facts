import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Category from '../../components/category';

configure({ adapter: new Adapter() })

describe('Category', () => {
    const event = {"target": {"value": "explicit"}};
    const selectedCategory = 'explicit'
    const fetchAllCategory = jest.fn();
    const getFactByCategory = jest.fn();
    let props = { categories: ["explicit", "dev", "movie", "food", "celebrity", "science", "sport", "political", "religion", "animal", "history", "music", "travel", "career", "money", "fashion"] };
    let category = shallow(<Category {...props}/>);

    it('renders properly', () => {
        expect(Category).toMatchSnapshot();
    });

    describe('when joke length is not zero', () => {
        beforeEach(() => {
          props = { categories: [], fetchAllCategory };
          category = shallow(<Category {...props}/>);
        });

        it('dispatch `fetchAllCategory()` when categories length equals 0', () => {
          expect(props.fetchAllCategory).toHaveBeenCalledWith();
        });
    });

    describe('simulating click on dropdown button', () => {
        it('`onSelect()` sets state to science`', () => {
          category.instance().handleChange(selectedCategory);
    
          expect(category.state().selectedCategory).toEqual(selectedCategory)
      });
      
    });

    describe('user wants to fetch a fact by category', () => {
        beforeEach(() => {
            props = { categories: [], fetchAllCategory, getFactByCategory };
            category = shallow(<Category {...props}/>);
            category.state().selectedCategory = event.target.value;
          });

        it('dispatches `getFactByCategory()`', () => {
            category.find('.btn').simulate('click')
            expect(props.getFactByCategory).toHaveBeenCalledWith(selectedCategory);
        });
    });
});