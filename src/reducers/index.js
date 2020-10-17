import counterReducer from './count';
import loggedReducer from './isLogged';

import {combinedReducers, combineReducers} from 'redux';

const allreducers = combineReducers({
    
    myCount: counterReducer,
    logged: loggedReducer
});

export default allreducers;
