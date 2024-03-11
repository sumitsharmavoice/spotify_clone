import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Input, Tooltip } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import "../index.css";
import SongTypeEnum from "./SongTypeEnum";
// import { GET_SONGS } from '../graphql';

const GET_SONGS = gql`
  query GetSongs($songType: String) {
    getSongs(songType: $songType) {
      id
      photoUrl
      audioUrl
      duration
      title
      artist
    }
  }
`;

function SelectedTab({ data_, setSong, handleUpdateRecentlyPlayed }) {
  const dataArr = [
    {
      title: "The End Where I begin",
      artist: "The Script",
      duration: "4:20",
      photoUrl:
        "https://i5.walmartimages.com/asr/a26140a3-203a-4558-bba8-6c7ffe6d014d.1ac8ca7a1d727eecac5eebdf945022dd.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Clock",
      artist: "Coldplay",
      duration: "5:20",
      photoUrl: "https://m.media-amazon.com/images/I/61AtJTBvalL.jpg",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Superheroe",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Clocks",
      artist: "Coldplay",
      duration: "5:20",
      photoUrl: "https://m.media-amazon.com/images/I/61AtJTBvalL.jpg",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      title: "Superheroese",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Superheroesef",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Superheroesg",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Superheroesh",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Superheroesi",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Superheroesj",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Superheroesk",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Superheroesl",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Superheroesm",
      artist: "The Script",
      duration: "4:50",
      photoUrl:
        "https://i5.walmartimages.com/asr/e5fb062b-522b-41de-befd-91c2349c580e.25d6595cfd0c9ae770673b03ca70da1f.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
  ];

  const [getBg, setBg] = useState("The End Where I begin");
  // const RECENTLY_PLAYED = data
  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: { songType: SongTypeEnum.FOR_YOU },
  });
  console.warn(typeof SongTypeEnum.FOR_YOU, "adg");
  console.log(data, "adg");

  const handleSongs = (el) => {
    setSong(el);
    console.log(el.title, "Sumits");
    setBg(el.title);
    // handleUpdateRecentlyPlayed(el.id);
  };

  return (
    <div className="tab-maincontainer">
      <div className="tab-heading">{data_}</div>
      {loading && <p className="tab-message">loading...</p>}
      {error && <p className="tab-message">{error.message}</p>}
      {/* {SongsData && SongsData.getSongs.map((el, index) => ( */}
      <div style={{ width: "80%" }}>
        <Input
          placeholder="Search Song / Artist"
          suffix={
            <Tooltip title="search">
              <SearchOutlined style={{ cursor: "pointer" }} />
            </Tooltip>
          }
        />
      </div>
      <div className="scrollable-container">
        {dataArr.map((el, index) => (
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
              src={el.photoUrl}
              alt={el.title}
            />
            <div className="tab-title_artist_textWrapper">
              <p>{el.title}</p>
              <span>{el.artist}</span>
            </div>
            <div className="tab-duration">{el.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectedTab;
