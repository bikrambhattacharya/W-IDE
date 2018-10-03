import { combineReducers } from 'redux';

import IdeReducer from './Eval-code/reducers/Ide';


const rootReducer = combineReducers({
    ide:IdeReducer
});

export default rootReducer;