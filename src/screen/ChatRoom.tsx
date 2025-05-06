import styled, { ThemeContext, useTheme } from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    background-color: ${(props) => props.theme.lightYellow};
`;


const ChatRoom = () => {
    const theme = useTheme();
    return (
        <>
            <Wrapper></Wrapper>
        </>
    );
};

export default ChatRoom;
