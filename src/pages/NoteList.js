import styled, {css} from 'styled-components';
import TopBar  from './../component/TopBar.js';
import ListHeader from '../component/ListHeader.js';
import ToolBar from '../component/ToolBar.js';
import NodeContainer from '../component/NodeContainer';
import Footer from '../component/Footer';

const StyledNodeList = styled.div`
    width: 450px;
    height: 700px;
    border-radius: 7%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    ${(p) =>  p.darkTheme ? css`background-color: rgba(0,0,0,0.5);` : css`background-color: rgba(255,255,255,0.7);`};
    ${(p) => p.darkTheme ? css`border: 1px solid rgba(0,0,0,0.5);` : css`border: 1px solid rgba(255,255,255,0.7);`};
    align-items: center;
    padding: 10px 15px;
`;

const NodeList = function(...props){
    return (
        <StyledNodeList darkTheme>
            <TopBar></TopBar>
            <ListHeader title="심플 노트" subtitle="간단한 노트입니다"></ListHeader>
            <ToolBar></ToolBar>
            <NodeContainer></NodeContainer>
            <Footer></Footer>
            {/* memoNodes */}
        </StyledNodeList>
    );
}

export default NodeList;