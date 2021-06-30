import { useContext } from "react";
import { HeaderStyled, Container, HeaderMobile, Drawer, MenuTitle, DrawerClose, Logo, HeaderImg, HeaderDesktop, Search, Icon, Input } from "../UI/HeaderStyled";
import FilterContext from "../contexts/FilterContext";
import Menu from "./Menu";

function Header() {

    const { setFilter } = useContext(FilterContext);

    return (
        <HeaderStyled>
            <Container>
                <HeaderMobile>
                    <Drawer>
                        <img src="assets/menu.svg" alt="menu" />
                        <MenuTitle>menu</MenuTitle>
                    </Drawer>
                    <DrawerClose>
                        <img src="assets/close.svg" alt="fechar menu" />
                        <MenuTitle>fechar</MenuTitle>
                    </DrawerClose>
                    <Logo>
                        <HeaderImg src="assets/rchlo.svg" alt="Logo" />
                    </Logo>
                </HeaderMobile>
                <HeaderDesktop>
                    <Logo>
                        <HeaderImg src="assets/riachuelo.svg" alt="Logo" />
                    </Logo>
                </HeaderDesktop>
                <Search>
                    <Icon src="assets/search.svg" alt="lupa" />
                    <Input type="search" placeholder="O que você está procurando?"
                        onChange={(event) => setFilter(event.target.value)}
                    />
                </Search>

                <Menu />
            </Container>
        </HeaderStyled>
    );
}

export default Header;