import styled from "styled-components";

const StyledNode = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 15px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px 20px;
    box-sizing: border-box;
`;

const StyledNodeTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
    height: 50%;
    font-weight: 600;
    text-align: center;
`;

const StyledNodeDate = styled.div`
    display: flex;
    align-items: center;
    height: 50%;
    font-size: 15px;
    color: rgb(200,200,200);
    text-align: center;
`;

const Node = function(){
    return (
        <StyledNode>
            <StyledNodeTitle>hihihi</StyledNodeTitle>
            <StyledNodeDate>25초 전 수정</StyledNodeDate>
        </StyledNode>
    );
}


export default Node;