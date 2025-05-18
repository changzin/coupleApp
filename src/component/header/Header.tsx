import styled, { ThemeContext, useTheme } from "styled-components";
import {ReactComponent as CalendarHeart} from '../../assets/icon/CalendarHeart.svg';
import {ReactComponent as DotsThreeVertical} from '../../assets/icon/DotsThreeVertical.svg';

const Wrapper = styled.div`
    height: 48px;
    background-color: ${(props) => props.theme.lightYellow};
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 8px 8px;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`

const IconButton = styled.div`
    height: 32px;
    width: 32px;
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.lightOrange};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Icon = styled.svg`
    width: 20px;
    height: 20px;
`

const Header = () => {
    const theme = useTheme();
    return (
        <>
            <Wrapper>
                <IconWrapper>
                    <IconButton><CalendarHeart></CalendarHeart></IconButton>
                    <IconButton><DotsThreeVertical></DotsThreeVertical></IconButton>
                </IconWrapper>
            </Wrapper>
        </>
    );
};

export default Header;
