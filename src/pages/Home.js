import React, { useState } from "react";
import Menu from "../components/Menu";
import SelectedTab from "../components/SelectedTab";
import TrackPlayer from "../components/TrackPlayer";
import { useMutation } from "@apollo/client";
import { Col, Row } from "antd";
import "../index.css";
import Footer from "../components/Footer";
import { UPDATE_RECENTLY_PLAYED } from "../graphql";

const Home = () => {
  const [getMenu, setMenu] = useState("RECENTLY_PLAYED");
  const [getSong, setSong] = useState({});
  const [getFullList, setFullList] = useState({})
  const [playButton, setPlayButton] = useState(false)
  const [getBg, setBg] = useState(getSong?.title);

  const [updateRecentlyPlayed] = useMutation(UPDATE_RECENTLY_PLAYED);

  const handleUpdateRecentlyPlayed = async (songId) => {
    try {
      const result = await updateRecentlyPlayed({
        variables: { songId },
      });
      console.log(result.data.updateRecentlyPlayed.ok);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-mainContainer">
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 4 }}>
          <Menu
            setMenu={setMenu}
            getMenu={getMenu}
            handleUpdateRecentlyPlayed={handleUpdateRecentlyPlayed}
          />
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 10 }}>
          <SelectedTab
            data_={getMenu}
            setSong={setSong}
            setPlayButton={setPlayButton}
            setFullList={setFullList}
            getBg={getBg}
            setBg={setBg}
            handleUpdateRecentlyPlayed={handleUpdateRecentlyPlayed}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 10 }}>
          <TrackPlayer
            data_={getSong}
            playButton={playButton}
            setPlayButton={setPlayButton}
            setSong={setSong}
            setBg={setBg}
            tracks={getFullList?.getSongs || []}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 'auto' }}>
        <Footer />
      </Row>
    </div>
  );
};

export default Home;
