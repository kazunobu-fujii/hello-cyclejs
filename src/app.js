import {Observable} from 'rx'
import {div, button, p} from '@cycle/dom';

function intent({DOM}) {
  return {
    decrement$: DOM.select('.decrement').events('click').map(ev => -1),
    increment$: DOM.select('.increment').events('click').map(ev => +1)
  };
}

function model(actions) {
  return Observable.merge(actions.decrement$, actions.increment$)
    .startWith(0)
    .scan((x,y) => x+y);
}

function view(state$) {
  return state$.map(state =>
    div([
      button('.decrement', 'Decrement'),
      button('.increment', 'Increment'),
      p('Counter: ' + state)
    ])
  );
}

export default {intent, model, view};
