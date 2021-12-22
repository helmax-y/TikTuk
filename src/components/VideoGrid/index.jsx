import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import StyledVideoGrid from './StyledVideoGrid';
import Loader from '../../common/Loader';
import getData from '../../api/getData';

const VideoGrid = function ({ setIsError }) {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { tiktuker } = useParams();

    useEffect(() => {
        getData('https://tiktok33.p.rapidapi.com/trending/feed')
            .then((data) => setVideos(data))
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [tiktuker, setIsError]);

    return (
        <StyledVideoGrid className="video-grid">
            {videos.map(({ id, covers, playCount }) => (
                <div key={id} className="flex-item">
                    <img className="image" src={covers.default} alt="TikTuk" />

                    <p className="play-count">{playCount}</p>
                </div>
            ))}
            {isLoading && <Loader />}
        </StyledVideoGrid>
    );
};

export default VideoGrid;
