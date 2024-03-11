import React from 'react'
import { SpotifyFilled } from '@ant-design/icons'
import '../index.css'
import { Typography } from 'antd'
function Menu({ getMenu, setMenu }) {
    const handleClick = (text) => {
        if (getMenu !== text) {
            setMenu(text)
        }
    }
    return (
        <>
            <div className='menu-mainContainer'>

                <div className='menu-spotify_iconWrapper'>
                    <SpotifyFilled />
                    <Typography className='menu-typography' >Spotify</Typography>
                </div>
                <div className='menu-buttonWrapper'>
                    <span className={getMenu === 'For You' ? 'menu-button' : 'menu-button_scnd'} onClick={() => handleClick('For You')}>For You</span>
                    <span className={getMenu === 'Top Tracks' ? 'menu-button' : 'menu-button_scnd'} onClick={() => handleClick('Top Tracks')}>Top Tracks</span>
                    <span className={getMenu === 'Favourites' ? 'menu-button' : 'menu-button_scnd'} onClick={() => handleClick('Favourites')}>Favourites</span>
                    <span className={getMenu === 'Recently Played' ? 'menu-button' : 'menu-button_scnd'} onClick={() => handleClick('Recently Played')}>Recently Played</span>
                </div>
            </div>
        </>
    )
}

export default Menu
