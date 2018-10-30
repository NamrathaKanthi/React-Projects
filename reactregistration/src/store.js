import { createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/simpleReducer';
const configurableStore = createStore(
    reducer
    //, any middleware if required
);

export default configurableStore;