import React, { useEffect, useRef, useState } from 'react'
import '../index.css'
import { Slider, Tooltip, Space } from 'antd';
import { PlayCircleFilled, PauseCircleFilled, BackwardOutlined, ForwardOutlined, SoundOutlined, MoreOutlined } from '@ant-design/icons';



function TrackPlayer({ data, tracks, setSong }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isVolumeSliderVisible, setIsVolumeSliderVisible] = useState(false);

    useEffect(() => {
        const handleTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };

        const handleLoadedMetadata = () => {
            setDuration(audioRef.current.duration);
        };

        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

        return () => {
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
            audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
        };
    }, []);

    const playAudio = () => {
        audioRef.current.play();
        setIsPlaying(true);

    };

    const pauseAudio = () => {
        audioRef.current.pause();
        setIsPlaying(false);

    };

    const handlePrevious = () => {
        //
    };

    const handleNext = () => {
        //
    };
    const handleVolumeChange = (value) => {
        if (typeof value === 'number' && !isNaN(value)) {
            setVolume(value);
            audioRef.current.volume = value / 100;
            setIsVolumeSliderVisible(true);
        }
        // Automatically hide the volume slider after a short delay
        setTimeout(() => {
            setIsVolumeSliderVisible(false);
        }, 2000);
    };

    const handleSliderChange = (value) => {
        if (typeof value === 'number' && !isNaN(value)) {
            audioRef.current.currentTime = value;
            setCurrentTime(value);
        }
    };

    const volumeIcon = volume === 0 ? <SoundOutlined onClick={() => setIsVolumeSliderVisible(!isVolumeSliderVisible)} /> : <SoundOutlined className='track-more_volume' onClick={() => { setIsVolumeSliderVisible(!isVolumeSliderVisible) }} />;


    return (
        <div className='track-maincontainer'>
            <div className='track-contentWrapper'>
                <div className='track-contentHeader'>
                    <p>{data.title}</p>
                    <span>{data.artist}</span>
                </div>
                <img className='track-imgWrapper' width={'100%'} src={data.photoUrl} />
                <Slider
                    value={currentTime}
                    max={duration}
                    onChange={handleSliderChange}
                    style={{ margin: '0', width: '100%' }}
                    handleStyle={{ display: 'none', }}
                    trackStyle={{ backgroundColor: '#ecf0f1' }}
                    railStyle={{ backgroundColor: 'rgb(76 76 76)' }}

                />
                <Space size="small" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative' }} >
                    <Tooltip title="Options" >
                        <MoreOutlined className='track-more' />
                    </Tooltip>
                    <Space size='middle'>
                        <div onClick={handlePrevious} className='track-prevNextButton'> <BackwardOutlined style={{ color: 'rgb(90 90 90)' }} /></div>
                        {isPlaying ? (
                            <div onClick={pauseAudio} > <PauseCircleFilled className='track-playPause' /></div>
                        ) : (
                            <div onClick={playAudio} ><PlayCircleFilled className='track-playPause' /></div>
                        )}
                        <div onClick={handleNext} className='track-prevNextButton'> <ForwardOutlined /></div>
                    </Space>
                    <Space size="small" >
                        <Tooltip title={`Volume: ${volume}%`}>
                            {volumeIcon}
                        </Tooltip>
                        {isVolumeSliderVisible &&
                            <Slider vertical
                                trackStyle={{ backgroundColor: '#ecf0f1' }}
                                railStyle={{ backgroundColor: 'rgb(76 76 76)' }}
                                value={volume}
                                onBlur={() => setIsVolumeSliderVisible(false)}
                                onChange={handleVolumeChange}
                                style={{ height: '40px', position: 'absolute', top: '-1rem', left: 'auto' }} />
                        }
                    </Space>
                </Space>
            </div>
            <audio
                ref={audioRef}
                src={data.audioUrl}
                autoPlay
            ></audio>
        </div >
    )
}

export default TrackPlayer
