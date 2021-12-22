import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import StyledProfile from './StyledProfile';
import VideoGrid from '../VideoGrid';
import ErrorToast from '../../common/ErrorToast';
import getData from '../../api/getData';

const Profile = function () {
    const [{ user = {}, stats = {} }, setUser] = useState({});
    const [isError, setIsError] = useState(false);
    const { tiktuker } = useParams();

    useEffect(() => {
        getData(`https://tiktok33.p.rapidapi.com/user/info/${tiktuker}`)
            .then((data) => setUser(data))
            .catch(() => setIsError(true));
    }, [tiktuker]);

    return (
        <StyledProfile>
            <section className="user-info">
                <Avatar
                    className="avatar"
                    src={user.avatarThumb}
                    alt={user.nickname}
                    sx={{ width: 100, height: 100 }}
                />
                <div className="stats">
                    <div>
                        <p>following</p>
                        <p>{stats.followingCount}</p>
                    </div>
                    <div>
                        <p>followers</p>
                        <p>{stats.followerCount}</p>
                    </div>
                    <div>
                        <p>likes</p>
                        <p>{stats.heartCount}</p>
                    </div>
                </div>
            </section>

            <VideoGrid setIsError={setIsError} />

            <Link className="link" to="/">
                <p>Feed</p>
            </Link>
            <Link className="link-mobile" to="/">
                Feed
            </Link>

            <ErrorToast open={isError} />
        </StyledProfile>
    );
};

export default Profile;
