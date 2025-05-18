import styled, { ThemeContext, useTheme, css } from "styled-components";
import { ReactComponent as Acorn } from "../../assets/icon/Acorn.svg";
import { ReactComponent as ChatTeardropDots } from "../../assets/icon/ChatTeardropDots.svg";
import { ReactComponent as HouseLine } from "../../assets/icon/HouseLine.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icon/ShoppingCart.svg";
import { ReactComponent as FootPrint } from "../../assets/icon/FootPrint.svg";
import { act, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    height: 60px;
    background-color: ${(props) => props.theme.yellow};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 32px;
`;

const NaviMenu = styled.div`
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 999;
`;
const StyledFootPrint = styled(FootPrint)`
    position: absolute;
    top: -8px;
    right: -5px;
    z-index: 998;
`;

const StyledAcorn = styled(Acorn)<{ activeicon?: string }>`
    position: absolute;
    z-index: 999;
    ${({ activeicon }) =>
        activeicon === 'plus' &&
        css`
            & {
                fill: ${(props) => props.theme.lightYellow};
            }
        `}
`;

const StyledChatTeardropDots = styled(ChatTeardropDots)<{ activeicon?: string }>`
    position: absolute;
    z-index: 999;
    ${({ activeicon }) =>
        activeicon === 'chat' &&
        css`
            & {
                fill: ${(props) => props.theme.lightYellow};
            }
        `}
`;

const StyledHouseLine = styled(HouseLine)<{ activeicon?: string }>`
    position: absolute;
    z-index: 999;
    ${({ activeicon }) =>
        activeicon === 'house' &&
        css`
            & {
                fill: ${(props) => props.theme.lightYellow};
            }
        `}
`;

const StyledShoppingCart = styled(ShoppingCart)<{ activeicon?: string }>`
    position: absolute;
    z-index: 999;
    ${({ activeicon }) =>
        activeicon === 'shop' &&
        css`
            & {
                fill: ${(props) => props.theme.lightYellow};
            }
        `}
`;

const NavigationBar = () => {
    const [activeIcon, setActiveIcon] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setActiveIcon("house");
    }, []);
    useEffect(() => {
        if (activeIcon === "house") {
            navigate("/Main")
        } else if (activeIcon === "chat") {
            navigate("/Chat")
        } else if (activeIcon === "shop") {
            navigate("/Shop")
        } else if (activeIcon === "plus") {
            navigate("/Plus")
        } else {
            navigate("/Main")
        }
    }, [activeIcon]);
    
    const changeActiveIcon = (menu: string) => {
        setActiveIcon(menu);
    }

    return (
        <>
            <Wrapper>
                <NaviMenu onClick={() => {changeActiveIcon('house');}}>
                    <StyledHouseLine activeicon={activeIcon}></StyledHouseLine>
                    {
                        activeIcon === 'house' && (
                            <StyledFootPrint></StyledFootPrint>
                        )
                    }
                </NaviMenu>
                <NaviMenu onClick={() => {changeActiveIcon('chat');}}>
                    <StyledChatTeardropDots activeicon={activeIcon}></StyledChatTeardropDots>
                    {
                        activeIcon === 'chat' && (
                            <StyledFootPrint></StyledFootPrint>
                        )
                    }
                </NaviMenu>
                <NaviMenu onClick={() => {changeActiveIcon('shop');}}>
                    <StyledShoppingCart activeicon={activeIcon}></StyledShoppingCart>
                    {
                        activeIcon === 'shop' && (
                            <StyledFootPrint></StyledFootPrint>
                        )
                    }
                </NaviMenu>
                <NaviMenu onClick={() => {changeActiveIcon('plus');}}>
                    <StyledAcorn activeicon={activeIcon}></StyledAcorn>
                    {
                        activeIcon === 'plus' && (
                            <StyledFootPrint></StyledFootPrint>
                        )
                    }
                </NaviMenu>
            </Wrapper>
        </>
    );
};

export default NavigationBar;
