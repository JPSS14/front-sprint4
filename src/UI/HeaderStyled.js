import styled from 'styled-components';

export const HeaderStyled = styled.header`
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
`;

export const Container = styled.div`
    margin: auto;
    width: 95%;
    max-width: 1200px;
`;

export const HeaderMobile = styled.div`

display: flex;

@media (min-width: 1200px){
    display: none;
    margin-bottom: 25px;
    align-items: center;
}
`;

export const Drawer = styled.div`
    width: 24px;
    opacity: 54%;
    display: block;
    margin-top: 25px;
`;

export const DrawerClose = styled.div`
    width: 24px;
    opacity: 54%;
    display: none;
`;

export const MenuTitle = styled.p`
    text-transform: lowercase;
    font-size: 0.5625rem;
    font-weight: 400;
    line-height: 0;
`;

export const Logo = styled.h1`
    height: 70px;
    line-height: 70px;
    text-align: center;

    @media (max-width: 1200px){
        flex-grow: 1;
    }
`;

export const HeaderImg = styled.img`
    height: 25px;
    transform: translateY(10px);
`;

export const HeaderDesktop = styled.div`
@media (max-width: 1200px) {

      display: none;

  }
`;

export const Search = styled.div`
    position: relative;
`;

export const Icon = styled.img`
    width: 24px;
    opacity: 26%;
    top: 8px;
    position: absolute;
    padding-left: 10px;
    color: rgba(0, 0, 0, 0.26);
    line-height: 40px;
`;

export const Input = styled.input`
    height: 40px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding-left: 40px;

    :hover{
        border-color: #000;
    }

    ::placeholder{
        font-size: 0.9375rem;
        font-weight: 600;
        font-family: "Open Sans";
        color: #9b9b9b;
    }
`;

export const HeaderMenu = styled.nav`
@media (max-width: 1200px) {

      display: none;

  }
`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const MenuLink = styled.a`
    font-size: 0.8125rem;
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
    padding-bottom: 5px;
    vertical-align: baseline;

    :hover{
        border-bottom: 2px solid #000;
    }
`;