import styled from "styled-components";

const AspectRatio = styled.div`
    position: relative;
    overflow: hidden;
    
    &::before {
        display: block;
        content: " ";
        width: 100%;
        padding-top: calc((${({ ratioHeight }) => ratioHeight} / ${({ ratioWidth }) => ratioWidth}) * 100%);
    }

    >img,
    >video,
    >figure,
    >.ratio-content {
        position: absolute;
        top: 0;
        left: -9999px;
        right: -9999px;
        bottom: 0;
        min-height: 100%;
        min-width: 100%;
        height: 100%;
        width: 100%;
        margin: auto;
        object-fit: cover;
    }
`;

export default AspectRatio;