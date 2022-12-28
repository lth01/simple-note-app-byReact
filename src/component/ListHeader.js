import styled from "styled-components";

const StyledListHeader = styled.div`
    width: 100%;
    min-height: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    row-gap:15px;
`;

const StyledTitle = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 40%;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
`;

const StyledSubTitle = styled.div`
    width: 100%;
    height: 60%;
    font-size: 16px;
    font-weight: 300;
    color: #fff;
`;

const ListHeader = function({title, subtitle}){
    return (
        <StyledListHeader >
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledSubTitle>
                {subtitle}
            </StyledSubTitle>
        </StyledListHeader>
    );
}

export default ListHeader;