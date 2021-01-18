import {FETCH_IMAGE,FIND_IMAGE} from './contants';
import axios from "axios";

export const initiateImage = () => {
  return (dispatch) => {
    axios.get("https://pixabay.com/api/?key=18659669-e43ce50b91d96e2c5c807c5fa&q=dog&image_type=photo&per_page=15&safesearch=true").then((response) => {
      dispatch(fetchImage(response.data.hits));
    });
  };
};
export const actFindImage = (value) => {
  return (dispatch) => {
    axios.get(`https://pixabay.com/api/?key=18659669-e43ce50b91d96e2c5c807c5fa&q=${value}&image_type=photo&per_page=15&safesearch=true`)
      .then(res => {
        dispatch(findImage(res.data.hits))
      })
      .catch(err => console.log(err));
  }
}

export const findImage = (image) => {
  return {
    type: FIND_IMAGE,
    payload: image
  }
}
export const fetchImage = (image) => {
  return {
    type: FETCH_IMAGE,
    payload: image
  };
};