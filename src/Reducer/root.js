import { combineReducers } from 'redux';
import ImageReducer from './images';
import VideoReducer from './video';



const RootReducer = combineReducers({
     ImageReducer,
     VideoReducer
})

export default RootReducer;