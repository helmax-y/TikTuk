import styled from 'styled-components';

export default styled.main`
    position: relative;
    min-height: 100vh;
    padding-top: 4vh;
    padding-bottom: 1px;
    background-color: beige;
    box-sizing: border-box;

    @media (max-width: 680px) {
        padding-top: 0;
    }

    .video {
        position: relative;
        max-width: 400px;
        margin: 0 auto 24px;

        @media (max-width: 680px) {
            margin-bottom: 128px;
        }
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
        display: flex;
        flex-direction: column;

        @media (max-width: 680px) {
            top: calc(100% + 8px);
            left: 16px;
            flex-direction: row;
            align-items: end;
        }
    }

    .nickname {
        margin-top: 8px;
        letter-spacing: 2px;
        white-space: nowrap;

        @media (max-width: 680px) {
            margin-left: 8px;
        }
    }

    .stats {
        position: absolute;
        bottom: 0;
        left: calc(100% + 16px);
        display: flex;
        flex-direction: column;
        letter-spacing: 2px;

        @media (max-width: 680px) {
            left: auto;
            top: calc(100% + 8px);
            right: 16px;
            flex-direction: row;
        }
    }

    .comments {
        margin-top: 16px;

        @media (max-width: 680px) {
            margin-top: 0;
            margin-left: 16px;
        }
    }

    .pagination {
        position: absolute;
        bottom: 8px;
        width: 100%;

        ul {
            justify-content: center;
        }
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