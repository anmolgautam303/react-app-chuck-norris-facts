import ls from 'local-storage';
import { find } from 'lodash';

export const SaveFact = (joke) => {
  let jokes = JSON.parse(ls.get('favoriteFacts')) || [];

  if((find(jokes, {id: joke.id})) === undefined) {
    const newJoke = {
      id: joke.id,
      value: joke.value
    };

    jokes.push(newJoke);

    ls.set("favoriteFacts", JSON.stringify(jokes));
  }
};