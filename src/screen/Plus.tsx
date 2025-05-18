import styled from "styled-components";
import Header from "../component/header/Header";

const Wrapper = styled.div`
    height: calc(100% - 60px);
    background-color: ${(props) => props.theme.lightYellow};
`;


const Plus = () => {
    return (
        <>
            <Wrapper>
                <Header></Header>
            </Wrapper>
        </>
    );
};

export default Plus;
