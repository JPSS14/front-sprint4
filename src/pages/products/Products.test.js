import { render, screen } from "@testing-library/react";
import {BreadcrumbItem} from './components/Breadcrumbs';
import {FilterItem} from './components/Filters';
import {Product} from './ProductsPage';

describe("Testes do componente produto", () => {

    it("Deverá exibir o breadcrumb", () => {
        render(<BreadcrumbItem link={"#"} name={"teste"} />);

        expect(screen.getByText("teste")).toBeInTheDocument();
    })

    it("Deverá exibir o filter", () =>{
        render(<FilterItem label={"teste"}/>);

        expect(screen.getByText("teste")).toBeInTheDocument();
    })

    // it("Deverá exibir o produto", ()=>{
    //     render(<Product image={"testeimg"} name={"teste"} price={"price"} id={"id"}/>);

    //     expect(screen.getByText("teste")).toBeInTheDocument();
    // })
})