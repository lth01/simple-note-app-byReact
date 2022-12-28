import styled from "styled-components";
import Node from "./Node";

const StyledNodeContainer = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 5px;
    margin-top: 15px;
`;

const NodeContainer = function(){
    return (
        <StyledNodeContainer>
            <Node></Node>
        </StyledNodeContainer>
        // nodes..
        // create Btn
    );
}


export default NodeContainer;