import { FETCH_IMAGE, FIND_IMAGE } from '../Action/contants';

const initState = {
    ListImages: [],
    SearchImages: []
}



const ImageReducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_IMAGE:
            state.ListImages = action.payload;
            return { ...state };
        case FIND_IMAGE:
            state.SearchImages = action.payload;
            return { ...state };
        default:
            return state;    
    }
};

export default ImageReducer;