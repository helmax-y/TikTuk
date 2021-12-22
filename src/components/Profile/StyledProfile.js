import styled from 'styled-components';

export default styled.main`
    position: relative;
    min-height: 100vh;
    background-color: #f9f7fc;

    .user-info {
        max-width: 500px;
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
        position: relative;
        max-width: 500px;
        margin: 0 auto;
    }

    .link {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 160px;
        cursor: pointer;

        @media (max-width: 980px) {
            display: none;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
            border-right: 2px solid grey;
        }

        p {
            position: absolute;
            left: 50%;
            top: 50%;
            text-transform: uppercase;
            letter-spacing: 2px;
            transform: translate(-50%, -50%) rotate(-90deg);
            transform-origin: center;
        }
    }

    .link-mobile {
        display: none;

        @media (max-width: 980px) {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            padding: 16px 32px;
            text-transform: uppercase;
            letter-spacing: 2px;

            &:hover {
                border-right: 2px solid lightgrey;
                border-bottom: 2px solid lightgrey;
            }
        }
    }
`;
