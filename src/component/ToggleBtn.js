import styled from "styled-components";

const ToggleBar = styled.div`
    width: 85px;
    height: 32px;
    border-radius: 40px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    background-color: #fff;
`;

const ToggleBtn = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: #000;
`;

export {ToggleBar, ToggleBtn};