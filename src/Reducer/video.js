import {FETCH_VIDEO} from "../Action/contants";
const initState = {
    ListVideos: []
}

const VideoReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_VIDEO:
            state.ListVideos = action.payload;
            return {...state};
        default:
            return state;    
    }
}

export default VideoReducer;