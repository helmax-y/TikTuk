import styled from 'styled-components';

export default styled.main`
    position: relative;
    height: 100vh;
    padding-top: 4vh;
    background-color: beige;
    box-sizing: border-box;

    .video {
        position: relative;
        width: 400px;
        margin: 0 auto;
    }

    .player {
        width: 100%;
        min-height: 400px;
        background-color: rgba(3, 3, 3, 0.1);
        border-radius: 3px;
    }

    .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        transform: translate(-50%, -50%);
    }

    .post-description {
        position: absolute;
        bottom: 16px;
        left: 16px;
        width: 70%;
        color: #fff;
    }

    .author {
        position: absolute;
        top: 0;
        left: calc(100% + 16px);
    }

    .nickname {
        margin-top: 8px;
        font-weight: 700;
        white-space: nowrap;
    }

    .stats {
        position: absolute;
        bottom: 0;
        left: calc(100% + 16px);

        svg:nth-of-type(2) {
            margin-top: 30px;
        }
    }

    .pagination {
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .previous,
    .next {
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 160px;
        background: none;
        border: none;
        box-sizing: content-box;

        &:enabled {
            cursor: pointer;
        }

        &:hover:not(:disabled) {
            background-color: rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 980px) {
            display: none;
        }
    }

    .previous {
        left: 0;

        &:hover:not(:disabled) {
            border-right: 2px solid grey;
        }
    }

    .next {
        right: 0;

        &:hover:not(:disabled) {
            border-left: 2px solid grey;
        }
    }
`;