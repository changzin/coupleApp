import styled from "styled-components";
import Header from "../component/header/Header";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    height: calc(100% - 60px);
    background-color: ${(props) => props.theme.lightYellow};
`;

const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    overflow-y: auto;
    height: 500px;
`

interface Message {
  message: string;
}

const Chat = () => {
    const [messageList, setMessageList] = useState<Message[]>([]);
    
    const get_next_cache_message = () => {

    }

    useEffect(() => {
        // 초기 리스트 받아오기
        const message: Message = {
            message: 'asdf',
        };

        const tmpMessageList: Message[] = [];
        for (let i = 0; i < 1000; i++) {
            tmpMessageList.push(message);
        }

        console.log(tmpMessageList);
        setMessageList(tmpMessageList);
    }, []);

    return (
        <>
            <Wrapper>
                <Header></Header>
                <MessageWrapper>
                    {
                        messageList.map((message) => {
                            console.log("asdf");
                            return (
                                <div>{message.message}</div>
                            )
                        })
                    }
                </MessageWrapper>
            </Wrapper>
        </>
    );
};

export default Chat;
