import styled from "styled-components";

const SytledButton = styled.div`
    width: 60px;
    height: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: blue;
    color: #fff;
`;


const Button = function({text}){
    return <SytledButton>{text}</SytledButton>;
}

export default Button;