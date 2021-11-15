import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export default styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    width: 80px;
    height: 80px;
    
    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 4px 0 0 2px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${rotate} 1.2s linear infinite;
        transform-origin: center;
    }
`;
