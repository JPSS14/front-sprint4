import { useContext } from "react";
import CategoriesContext from "../contexts/CategoriesContext";
import {HeaderMenu, MenuList, MenuLink} from "../UI/HeaderStyled";

export function MenuItem({ label }) {
    return (
        <li>
            <MenuLink href="#home">
                <span>{label}</span>
            </MenuLink>
        </li>
    );
}

function Menu() {
    const { categories } = useContext(CategoriesContext);

    return (
        <HeaderMenu>
            <MenuList>
                {categories.all && categories.all.map(m => <MenuItem key={m.id} label={m.label} />)}
            </MenuList>
        </HeaderMenu>
    );
}

export default Menu;