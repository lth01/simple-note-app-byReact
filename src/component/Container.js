import styled from 'styled-components';
import NodeList from "./../pages/NoteList.js";
import darkBG from './../img/background.jpg';
const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${darkBG});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    opacity: 0.7;
`;


const Container = function(...props){
    return (
        <StyledContainer>
            <NodeList darkTheme>
            </NodeList>
        </StyledContainer>
    );
}

export default Container;