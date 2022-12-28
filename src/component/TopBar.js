import styled from "styled-components";
import {ToggleBtn, ToggleBar} from "./ToggleBtn.js"

const StyledTopBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const StyledWindowDot = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 7px;
    background-color: ${p => p.bgc || ''};
`;

const StyledIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 8px;
`

const TopBar = function(...props){
    return (
        <StyledTopBar>
            <StyledIcons>
                <StyledWindowDot bgc="red"/>
                <StyledWindowDot bgc="green"/>
                <StyledWindowDot bgc="yellow"/>
            </StyledIcons>
            <div>
                <ToggleBar>
                    <ToggleBtn />
                </ToggleBar>
            </div>
        </StyledTopBar>
    );
}

export default TopBar;