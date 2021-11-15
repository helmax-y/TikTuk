import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import getData from '../../utils/getData';
import fakeVideos from '../../userVideos';

const StyledVideoGrid = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .flex-item {
        position: relative;
        flex-basis: 32%;
        border-radius: 4px;
    }

    .image {
        width: 100%;
    }

    .play-count {
        position: absolute;
        top: 8px;
        left: 0;
        right: 0;
        text-align: center;
        letter-spacing: 2px;
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

const VideoGrid = () => {
    const [videos, setVideos] = useState(fakeVideos);
    const { tiktuker } = useParams();

    // useEffect(() => {
    //     getData(`https://tiktok33.p.rapidapi.com/user/feed/${tiktuker}`)
    //         .then(data => console.log(data));
    //         // .catch(() => setIsError(true));
    // }, [tiktuker]);

    return (
        <StyledVideoGrid className="video-grid">
            {videos.map(({ stats, video }) => (
                <div key={video.id} className="flex-item">
                    <img
                        className="image"
                        src={video.cover}
                        alt="TikTuk video"
                    />

                    <p className="play-count">{stats.playCount}</p>
                </div>
            ))}
        </StyledVideoGrid>
    )
};

export default VideoGrid;
