import {FETCH_VIDEO} from './contants';
import axios from 'axios';



export const actfetchVideo = () => {
    return (dispatch) => {
        axios.get("https://pixabay.com/api/videos/?key=18659669-e43ce50b91d96e2c5c807c5fa&q=dog&video_type=film&per_page=15&safesearch=true")
        .then(res => {
            dispatch(fetchVideo(res.data.hits))
        })
        .catch(err => console.log(err));
    }
}
export const fetchVideo = (video) => {
    return {
        type: FETCH_VIDEO,
        payload: video
    }
}