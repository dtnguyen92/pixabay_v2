import React from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function SearchScreen(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {},
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cols={4}>
        {props.image.map((img) => (
          <GridListTile key={img.id}>
            <img src={img.largeImageURL} alt={img.id}/>
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
  );
}

export default SearchScreen;
