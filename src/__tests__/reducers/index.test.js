import rootReducer from '../../reducers';

describe('rootReducer', () => {

    it('initialises the default state', () => {
        expect(rootReducer({}, {})).toEqual({"factReducer": {"categories": [], "factByCategory": [], "randomFact": [], "savedJokes": []}});
    });
});