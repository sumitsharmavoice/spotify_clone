import React from 'react'

function Menu({ getMenu, setMenu }) {
    const handleClick = (text) => {
        if (getMenu !== text) {
            setMenu(text)
        }
    }
    return (
        <>
            <div style={{ background: 'lightGray', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minHeight: '100vh', paddingTop: '50px' }}>
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: getMenu === 'For You' ? 'red' : 'green' }} onClick={() => handleClick('For You')}>For You</button>
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: getMenu === 'Top Tracks' ? 'red' : 'green' }} onClick={() => handleClick('Top Tracks')}>Top Tracks</button>
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: getMenu === 'Favourites' ? 'red' : 'green' }} onClick={() => handleClick('Favourites')}>Favourites</button>
                <button style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: getMenu === 'Recently Played' ? 'red' : 'green' }} onClick={() => handleClick('Recently Played')}>Recently Played</button>
                {getMenu}
            </div>
        </>
    )
}

export default Menu
