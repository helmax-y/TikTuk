import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import getData from '../../utils/getData';
import StyledFeed from './StyledFeed';
import Loader from '../../common/Loader';
import feedContent from '../../feed';

const Feed = () => {
    const [posts, setPosts] = useState(feedContent);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [isError, setIsError] = useState(false);

    // useEffect(() => {
    //     getData('https://tiktok33.p.rapidapi.com/trending/feed')
    //         .then(data => setPosts(data))
    //         .catch(() => setIsError(true));
    // }, []);

    useEffect(() => {
        setIsPaused(false);
    }, [page]);

    const handlePausePlay = ({ target }) => {
        if (target.readyState < 3) {
            return;
        }
        
        if (target.paused) {
            target.play();
            setIsPaused(false);
        } else {
            target.pause();
            setIsPaused(true);
        }
    };

    const post = posts[page - 1] || {};

    return (
        <StyledFeed>
            <article className="video">
                <video
                    src={post.videoUrl}
                    className="player"
                    autoPlay
                    loop
                    onClick={handlePausePlay}
                    onPlaying={() => setIsLoading(false)}
                    onWaiting={() => setIsLoading(true)}
                />

                {isLoading && <Loader />}
                {isPaused && <PlayArrowIcon className="play-icon" fontSize="large" />}

                <p className="post-description">{post.text}</p>

                <Link
                    className="author"
                    to={`${post.authorMeta?.name}`}
                >
                    <Avatar
                        src={post.authorMeta?.avatar}
                        alt={post.authorMeta?.nickName}
                        sx={{ width: 50, height: 50 }}
                    />
                    <p className="nickname">{post.authorMeta?.nickName}</p>
                </Link>

                <section className="stats">
                    <FavoriteBorderIcon />
                    <p>{post.diggCount}</p>
                    <CommentIcon />
                    <p>{post.commentCount}</p>
                </section>
            </article>

            <Pagination
                className="pagination"
                shape="rounded"
                count={posts.length}
                page={page}
                onChange={(e, value) => setPage(value)}
            />

            <nav>
                <button
                    type="button"
                    className="previous"
                    onClick={() => page > 1 && setPage(page - 1)}
                    disabled={page <= 1}
                >
                    <ArrowBackIosIcon fontSize="large" />
                </button>
                <button
                    type="button"
                    className="next"
                    onClick={() => page < posts.length && setPage(page + 1)}
                    disabled={page >= posts.length}
                >
                    <ArrowForwardIosIcon fontSize="large" />
                </button>
            </nav>

            <Snackbar open={isError} autoHideDuration={30000}>
                <Alert severity="error">
                    Unfortunately funny video couldn't be loaded :(<br />
                    Great opportunity to do smth useful!
                </Alert>
            </Snackbar>
        </StyledFeed>
    );
}

export default Feed;