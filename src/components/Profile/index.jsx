import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

import VideoGrid from '../VideoGrid';
import getData from '../../utils/getData';

const userData = {"user":{"id":"6699921606704448517","shortId":"0","uniqueId":"emiirbayrak","nickname":"⚡️EMIR BAYRAK⚡️","avatarLarger":"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1644765630558213~c5_1080x1080.jpeg?x-expires=1637092800&x-signature=F0x0u7c4eJTVzf4h5UZs%2B7qUHXw%3D","avatarMedium":"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1644765630558213~c5_720x720.jpeg?x-expires=1637092800&x-signature=%2BBFTw3if%2BePptSh8I4%2FeUn4NIqA%3D","avatarThumb":"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1644765630558213~c5_100x100.jpeg?x-expires=1637092800&x-signature=xdCVEXyKpt82B1LgF16wi%2BDQcZs%3D","signature":"Insta: emirbyr \n📤emir@moonvibe.com","createTime":1562078063,"verified":true,"secUid":"MS4wLjABAAAAmSwqdn7L-roKUufl4bvTt4JVhOKGSbCShrF5rcmn4ePWno2KAM5hCEXFd5abXIkD","ftc":false,"relation":0,"openFavorite":false,"commentSetting":0,"duetSetting":0,"stitchSetting":0,"privateAccount":false,"secret":false,"isADVirtual":false,"roomId":""},"stats":{"followerCount":4500000,"followingCount":894,"heart":495900000,"heartCount":495900000,"videoCount":2031,"diggCount":0},"itemList":[]};

const StyledProfile = styled.main`
    min-height: 100vh;
    background-color: #f9f7fc;

    .user-info {
        width: 500px;
        margin: 0 auto;
        padding: 16px;
    }

    .avatar {
        margin: 0 auto;        
    }

    .stats {
        display: flex;
        margin: 16px 0;

        div {
            flex: 1 0 0;
            padding: 20px 0;
            text-align: center;
            
            &:not(:first-of-type) {
                border-left: 1px solid lightgrey;
            }
        }

        p {
            letter-spacing: 2px;

            &:nth-of-type(2) {
                font-weight: 700;
            }
        }
    }

    .video-grid {
        width: 500px;
        margin: 0 auto;
    }

    .link {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 160px;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            border-right: 2px solid grey;
        }

        p {
            position: absolute;
            left: 50%;
            top: 50%;
            letter-spacing: 2px;
            transform: translate(-50%, -50%) rotate(-90deg);
            transform-origin: center;
        }
    }
`;

const Profile = () => {
    const [{ user = {}, stats = {} }, setUser] = useState(userData);
    const { tiktuker } = useParams();

    useEffect(() => {
        // getData(`https://tiktok33.p.rapidapi.com/user/info/${tiktuker}`)
        //     .then(data => console.log(data))
        //     .catch(() => setIsError(true));
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
                <flex className="stats">
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
                </flex>
            </section>

            <VideoGrid />

            <Link className="link" to='/'>
                <p>FEED</p>
            </Link>
        </StyledProfile>
    );
};

export default Profile;
