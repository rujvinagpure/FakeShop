import {createStore} from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers, {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

//store takes arguments 1st is reducers:this is the combine reducers tht we have; then,
// empty state, and then extension so tht we can se it in chrome