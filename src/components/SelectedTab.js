import React from 'react'

function SelectedTab(props) {
    const dataArr = [
        { song: 'The End Where I begin', track: 'The Script', time: '4:20', trackimg: 'https://i.ytimg.com/vi/b4hrUSBP4nc/maxresdefault.jpg' },
        { song: 'Clocks', track: 'Coldplay', time: '5:20', trackimg: 'https://m.timesofindia.com/photo/105323014/size-110641/105323014.jpg' },
        { song: 'Superheroes', track: 'The Script', time: '4:50', trackimg: 'https://static.mirchi.in/thumb/imgsize-41310,msid-97918466,width-400,height-225,resizemode-1,webp-1/97918466.jpg' },
        { song: 'Clocks', track: 'Coldplay', time: '5:20', trackimg: 'https://m.timesofindia.com/photo/105323014/size-110641/105323014.jpg' },
        { song: 'Superheroes', track: 'The Script', time: '4:50', trackimg: 'https://static.mirchi.in/thumb/imgsize-41310,msid-97918466,width-400,height-225,resizemode-1,webp-1/97918466.jpg' },
    ]
    const handleSongs = (el) => {
        props.setSong(el)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', paddingTop: '20px', gap: '10px', flexDirection: 'column', }}>
            <div style={{ fontSize: '20px', display: 'flex', width: '80%', fontWeight: 'bold' }}>{props.data}</div>
            {dataArr.map((el, index) => (
                <div
                    onClick={() => handleSongs(el)}
                    key={index} style={{ display: 'flex', width: '80%', padding: '4px', gap: '4px', background: 'lightGray', borderRadius: '4px', alignItems: 'center', color: "#080808", fontSize: '14px', cursor: 'pointer' }}
                >
                    <img style={{ borderRadius: '50%' }} src={el.trackimg} width='40px' height='40px' />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <p style={{ margin: 0 }}>{el.song}</p>
                        <p style={{ margin: 0 }}>{el.track}</p>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>{el.time}</div>
                </div>
            )
            )}
        </div>
    )
}

export default SelectedTab
