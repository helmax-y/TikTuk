import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StyledVideoGrid from './StyledVideoGrid';
import Loader from '../../common/Loader';
import getData from '../../utils/getData';
import userFeed from '../../mockData/userFeed.json';

const VideoGrid = ({ setIsError }) => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { tiktuker } = useParams();

    useEffect(() => {
        getData(`https://tiktok33.p.rapidapi.com/user/feed/${tiktuker}`)
            .then(data => setVideos(data.length ? data : userFeed.itemList))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [tiktuker, setIsError]);

    return (
        <StyledVideoGrid className="video-grid">
            {videos.map(({ stats, video }) => (
                <div key={video.id} className="flex-item">
                    <img
                        className="image"
                        src={video.cover}
                        alt="TikTuk"
                    />

                    <p className="play-count">{stats.playCount}</p>
                </div>
            ))}
            {isLoading && <Loader />}
        </StyledVideoGrid>
    )
};

export default VideoGrid;
