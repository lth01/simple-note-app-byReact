import styled from "styled-components";
import Button from "./Button";

const StyledFooter =  styled.div`
    width: 100%;
    min-height: 20%;
    height: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`;



const Footer = function(){

    return (
        <StyledFooter>
            <Button text="생성"></Button>
        </StyledFooter>
    )
}

export default Footer;