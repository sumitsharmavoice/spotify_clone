import React from "react";
import { SpotifyFilled } from "@ant-design/icons";
import "../index.css";
import { Typography } from "antd";
function Menu({ getMenu, setMenu,  }) {
  const handleClick = (text) => {
    if (getMenu !== text) {
      setMenu(text);
    }
  };
  return (
    <>
      <div className="menu-mainContainer">
        <div className="menu-spotify_iconWrapper">
          <SpotifyFilled />
          <Typography className="menu-typography">Spotify</Typography>
        </div>
        <div className="menu-buttonWrapper">
          <span
            className={
              getMenu === "FOR_YOU" ? "menu-button" : "menu-button_scnd"
            }
            onClick={() => handleClick("FOR_YOU")}
          >
            For You
          </span>
          <span
            className={
              getMenu === "TOP_TRACKS" ? "menu-button" : "menu-button_scnd"
            }
            onClick={() => handleClick("TOP_TRACKS")}
          >
            Top Tracks
          </span>
          <span
            className={
              getMenu === "FAVOURITES" ? "menu-button" : "menu-button_scnd"
            }
            onClick={() => handleClick("FAVOURITES")}
          >
            Favourites
          </span>
          <span
            className={
              getMenu === "RECENTLY_PLAYED" ? "menu-button" : "menu-button_scnd"
            }
            onClick={() => handleClick("RECENTLY_PLAYED")}
          >
            Recently Played
          </span>
        </div>
      </div>
    </>
  );
}

export default Menu;
