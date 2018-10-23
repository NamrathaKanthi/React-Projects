import {createStore} from 'redux';
import reducer from './reducer';
const store = createStore(
    reducer
    //, any middleware if required
);

export default store;