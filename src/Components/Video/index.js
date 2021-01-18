import React, {useState} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
function VideoResponsive(ListVideos) {
    const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {height: 305},
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  }));
  const classes = useStyles();
    console.log(ListVideos)
    return (
        <div className={classes.root}>
            <h2 className="text__title">video</h2>
            <GridList cols={4}>
        {ListVideos.ListVideos.map((img) => (
          <GridListTile key={img.id} >
                <video  height='240' controls>
                    <source src={img.videos.small.url}></source>
                </video>
            <GridListTileBar
              title={img.user}
              subtitle={
                <span>
                  by: <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton className={classes.icon} aria-label={img.id}>
                  <InfoOutlinedIcon></InfoOutlinedIcon>
                </IconButton>
              }
            ></GridListTileBar>
          </GridListTile>
        ))}
      </GridList>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        ListVideos: state.VideoReducer.ListVideos
    }
}
export default connect(mapStateToProps)(VideoResponsive);
