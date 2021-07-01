import { useContext } from "react";
import CategoriesContext from "../../../contexts/CategoriesContext";
import {MainBread, BreadList, BreadItem, BreadSeparator} from '../../../UI/MainStyled';

export function BreadcrumbItem({ link, name }) {
    return (
        <BreadItem>
            { link ?
                <>
                    <a href={link}>{name}</a>
                    <BreadSeparator>/</BreadSeparator>
                </>
                :
                <span className="breadcrumbs__link">{name}</span>
            }
        </BreadItem>
    );
}

function Breadcrumbs() {
    const { categories } = useContext(CategoriesContext);

    return (
        <MainBread>
            <nav>
                <BreadList>
                    {categories.current && categories.current.map(c => <BreadcrumbItem key={c.id} link={c.link} name={c.name} />)}
                </BreadList>
            </nav>
        </MainBread>
    )
}

export default Breadcrumbs;