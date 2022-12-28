import styled from "styled-components";

const StyledToolBar = styled.div`
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledSearchBar = styled.input`
    &:focus{
        outline: none;
    }
    appearance: none;
    width: 60%;
    border-radius: 5px;
    height: 100%;
    background-color: #fff;
    margin:0;
    padding: 0 10px;
    border:0;
    box-sizing: border-box;
`;

const StyledSearchType = styled.div`
    width: 35%;
    height: 100%;
    border-radius: 5px;
    background-color: #fff;
`;

const StyledBackBtn = styled.div`

`;

const ToolBar = function(){ 
    return (
        <StyledToolBar>
            <StyledSearchBar placeholder="검색"></StyledSearchBar>
            <StyledSearchType></StyledSearchType>
        </StyledToolBar>
    );
}

export default ToolBar;