import React, {useState} from 'react';
import HomeScreen from '../../Screens/Homescreen/index';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import {actFindImage } from '../../Action/image.js';
import store from '../../store/store';
import SearchScreen from '../../Screens/SearchScreen/index.js';
import './index.css';
function Search({ ListImages,SearchImages }) {
    const [searchText, setSearchText] = useState('');
    const handleChange = (e) => {
        if (e.target.value === '') {
            setSearchText({isLoading: false})
        } else {
            setSearchText({searchText: e.target.value, isLoading: true})
        }
    }
    return (
        <div className="search">
            <TextField name="searchText" onChange={handleChange} fullWidth={true} label="Search For Images" color='secondary' onKeyUp={(e) => {store.dispatch(actFindImage((e.target.value)))}} />
            <br />  
            <h2 className="text__title">Image</h2>
            {searchText.isLoading ? <SearchScreen image={SearchImages}/> : <HomeScreen image={ListImages} />}
        </div>
    );
}

const mapStateToProps = state => {
    return { 
        ListImages: state.ImageReducer.ListImages,
        SearchImages: state.ImageReducer.SearchImages
    }
}



export default connect(mapStateToProps)(Search);
