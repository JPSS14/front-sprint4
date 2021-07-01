import {render, screen} from '@testing-library/react';
import App from '../App';
import Header from './Header';
import Footer from './Footer';
import {MenuItem} from './Menu';

describe("Teste do componente Header", () =>{
    it("Deverá exibir o menu mobile", ()=>{
        render(<App/>);

        expect(screen.getByText("menu")).toBeInTheDocument();
    })

    it("Deverá exibir um item na navbar", () =>{
        render(<MenuItem label={"teste"}/>);

        expect(screen.getByText("teste")).toBeInTheDocument();
    })

})

describe("Teste do componente Footer", () =>{
    it("Deverá exibir um texto no footer", () =>{
        render(<Footer/>)

        expect(screen.getByText("Formas de Pagamento")).toBeInTheDocument();
    })
})