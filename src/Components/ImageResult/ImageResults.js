import {
  GridList,
  GridListTile,
  makeStyles,
  GridListTileBar,
  Dialog,
  Button,
} from "@material-ui/core";
import React, { useState, Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
  },
  gridList: {
    width: 1280,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  image: {
    width: "100%",
  },
  dialog: {
    width: 40,
    height: 40,
  },
  title: {
    listStyle: "none",
  },
}));

function ImageResults(props) {
  const [zoom, setZoom] = useState({
    isOpen: false,
    currentImg: "",
  });
  const [isCheck, setCheck] = useState(true);

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={3}>
        {props.image.map((img) => (
          <GridListTile key={img.id}>
            <img
              src={img.webformatURL}
              alt={img.title}
              className={classes.image}
            />
            <GridListTileBar
              title={img.user}
              subtitle={<span>by: {img.user}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${img.title}`}
                  className={classes.icon}
                  onClick={() =>
                    setZoom({
                      isOpen: true,
                      currentImg: `${img.webformatURL}`,
                      user: `${img.user}`,
                      favorites: `${img.favorites}`,
                      views: `${img.views}`,
                      comments: `${img.comments}`,
                    })
                  }
                >
                  <ZoomInIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Dialog open={zoom.isOpen} color="disable">
        <GridListTile className={classes.title}>
          <img
            src={zoom.currentImg}
            alt={zoom.title}
            className={classes.image}
          />
          <GridListTileBar
            title={zoom.user}
            subtitle={[
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: 180,
                }}
              >
                {isCheck ? (
                  <Fragment>
                    <FavoriteIcon
                      style={{
                        color: "white",
                        marginRight: 10,
                        marginLeft: 10,
                      }}
                      onClick={() => (
                        setCheck(!isCheck)
                      )}
                    ></FavoriteIcon>
                    <span>{parseInt(zoom.favorites)}</span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <FavoriteIcon
                      style={{
                        color: "red",
                        marginRight: 10,
                        marginLeft: 10,
                      }}
                      onClick={() => (
                        setCheck(!isCheck)
                      )}
                    ></FavoriteIcon>
                    <span>{parseInt(zoom.favorites)+1}</span>
                  </Fragment>
                )}
                <ChatBubbleIcon
                  style={{
                    color: "white",
                    marginRight: 20,
                    marginLeft: 10,
                  }}
                ></ChatBubbleIcon>
                <span>{zoom.comments}</span>
                <VisibilityIcon
                  style={{
                    marginRight: 20,
                    marginLeft: 10,
                  }}
                ></VisibilityIcon>
                <span>{zoom.views}</span>
              </div>,
            ]}
            actionIcon={
              <IconButton
                aria-label={`info about ${zoom.title}`}
                className={zoom.icon}
                onClick={() => {
                  setZoom({ isOpen: false });
                }}
              >
                <Button color="secondary">CLOSE</Button>
              </IconButton>
            }
          />
        </GridListTile>
      </Dialog>
    </div>
  );
}

export default ImageResults;
