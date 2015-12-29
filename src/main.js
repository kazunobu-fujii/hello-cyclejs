import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import app from './app.js';

function main(response) {
  return {
    DOM: app.view(app.model(app.intent(response)))
  };
}

run(main, {
  DOM: makeDOMDriver('#app')
});
