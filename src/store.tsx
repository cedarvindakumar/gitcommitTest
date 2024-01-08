import {legacy_createStore} from 'redux';

import rootReducer from './Component/Redux/Reducers';
const store = legacy_createStore(rootReducer)


export default store;