import { render, screen } from '@testing-library/react';
import App from './App';
import Page404 from '../src/pages/Page404';
import ProductsDetails from '../src/pages/products/ProductsDetails';
import Breadcrumbs from './pages/products/components/Breadcrumbs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



describe("Testando header", () => {
  it('Exibir um item do menu mobile', () => {
    render(<App />);

    expect(screen.getByText('menu')).toBeInTheDocument();
  })

  it('Deverá fazer o filtro', () => {
    render(<Page404 />);

    expect(screen.getByText('404 Página não encontrada')).toBeInTheDocument();
  })

  it('Deverá fazer o filtro', () => {
    render(<ProductsDetails />);

    expect(screen.getByText('Selecionar tamanho:')).toBeInTheDocument();
  })
  
});