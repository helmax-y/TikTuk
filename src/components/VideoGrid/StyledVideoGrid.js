import styled from 'styled-components';

export default styled.section`
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
        min-height: 100px;
    }

    .play-count {
        position: absolute;
        top: 8px;
        left: 0;
        right: 0;
        text-align: center;
        letter-spacing: 2px;
        background-color: rgba(255, 255, 255, 0.4);
    }
`;
