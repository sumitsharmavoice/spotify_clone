import React, { useState } from 'react'
import Menu from '../components/Menu'
import SelectedTab from '../components/SelectedTab'
import TrackPlayer from '../components/TrackPlayer'


const Home = () => {
    const [getMenu, setMenu] = useState("Recently Played")
    const [getSong, setSong] = useState({})
    return (
        <div style={{ display: 'flex', width: '100%', background: '#fff' }}>
            <div style={{ width: '20%' }}>
                <Menu setMenu={setMenu} getMenu={getMenu} />
            </div>
            <div style={{ width: '40%', background: '#808080' }}>
                <SelectedTab data={getMenu} setSong={setSong} />
            </div>
            <div style={{ width: '40%', background: '#807070' }}>
                <TrackPlayer data={getSong} />
            </div>
        </div>
    )
}

export default Home
