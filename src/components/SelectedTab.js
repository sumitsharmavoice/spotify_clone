import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Input, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../index.css";
import { GET_SONGS, baseUrl } from "../graphql";

function SelectedTab({ data_, setSong, getBg, setBg, setPlayButton, setFullList, handleUpdateRecentlyPlayed }) {
  const [defaultSongSet, setDefaultSongSet] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const songType = data_;

  const { loading, error, data: songsData, refetch } = useQuery(GET_SONGS, {
    variables: { songType, search: searchQuery },
  });

  useEffect(() => {
    if (songsData && songsData.getSongs.length > 0 && !defaultSongSet) {
      setSong(songsData.getSongs[0]);
      setBg(songsData.getSongs[0].title);
      setDefaultSongSet(true);
    }
    setFullList(songsData)
  }, [songsData, setSong, defaultSongSet]);

  const formatTextData = (text) => {
    const words = text.toLowerCase().split("_");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  };

  const headerText = formatTextData(data_);

  const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSongs = (el) => {
    setSong(el);
    setBg(el.title);
    handleUpdateRecentlyPlayed(el.id);
    setPlayButton(true)
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    refetch();
  };

  return (
    <div className="tab-maincontainer">
      <div className="tab-heading">{headerText}</div>
      <div style={{ width: "80%" }}>
        <Input
          placeholder='Search Song / Artist'
          suffix={
            <Tooltip title="search">
              <SearchOutlined style={{ cursor: "pointer" }} />
            </Tooltip>
          }
          onChange={(e) => handleSearch(e.target.value)}
        />
        {<div>hello</div>}
      </div>
      <div className="scrollable-container">
        {loading && <p className="tab-message">Loading...</p>}
        {error && <p className="tab-message">{error.message}</p>}
        {songsData &&
          songsData.getSongs.map((el, index) => (
            <div
              onClick={() => handleSongs(el)}
              key={index}
              className={
                getBg === el.title
                  ? "tab-listing_container_scnd"
                  : "tab-listing_container"
              }
            >
              <img
                className="tab-imageWrapper"
                src={`${baseUrl}${el.photoUrl}`}
                alt={el.title}
              />
              <div className="tab-title_artist_textWrapper">
                <p>{el.title}</p>
                <span>{el.artist}</span>
              </div>
              <div className="tab-duration">{formatDuration(el.duration)}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SelectedTab;
