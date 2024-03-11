import React, { useState } from 'react'
import Menu from '../components/Menu'
import SelectedTab from '../components/SelectedTab'
import TrackPlayer from '../components/TrackPlayer'
// import { GET_SONGS, UPDATE_RECENTLY_PLAYED } from '../graphql'
import { gql, useMutation, useQuery } from '@apollo/client'
import { Col, Row } from 'antd'
import '../index.css'
import Footer from '../components/Footer'


const GET_SONGS = gql`
  query GetSongs($search: String, $songType: SongTypeEnum) {
    getSongs(search: $search, songType: $songType) {
      id
      photoUrl
      audioUrl
      duration
      title
      artist
    }
  }
`;

const UPDATE_RECENTLY_PLAYED = gql`
  mutation UpdateRecentlyPlayed($songId: ID!) {
    updateRecentlyPlayed(songId: $songId) {
      ok
    }
  }
`;



const Home = () => {
  const [getMenu, setMenu] = useState("Recently Played")
  const [getSong, setSong] = useState({ title: 'The End Where I begin', artist: 'The Script', duration: '4:20', photoUrl: 'https://i5.walmartimages.com/asr/a26140a3-203a-4558-bba8-6c7ffe6d014d.1ac8ca7a1d727eecac5eebdf945022dd.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },)

  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: { songType: getMenu },
  });


  // Mutation hook for updating recently played
  const [updateRecentlyPlayed] = useMutation(UPDATE_RECENTLY_PLAYED);

  // Function to handle updating recently played
  const handleUpdateRecentlyPlayed = async (songId) => {
    try {
      const result = await updateRecentlyPlayed({
        variables: { songId },
      });
      console.log(result.data.updateRecentlyPlayed.ok); // Logging the result
    } catch (error) {
      console.error(error);
    }
  };


  return (<div className='home-mainContainer'>
    <Row >
      <Col xs={{ span: 24 }} md={{ span: 4 }} >
        <Menu setMenu={setMenu} getMenu={getMenu} handleUpdateRecentlyPlayed={handleUpdateRecentlyPlayed} />
      </Col>

      <Col xs={{ span: 24 }} md={{ span: 10 }}>
        <SelectedTab data_={getMenu} setSong={setSong} handleUpdateRecentlyPlayed={handleUpdateRecentlyPlayed} />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 10 }} >
        <TrackPlayer data={getSong} tracks={data?.getSongs || []} handleUpdateRecentlyPlayed={handleUpdateRecentlyPlayed} />
      </Col>
    </Row>
    <Row>
      <Footer />
    </Row>
  </div>
  )
}

export default Home
