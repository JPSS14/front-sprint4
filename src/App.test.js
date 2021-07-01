import { render, screen } from '@testing-library/react';
import Page404 from '../src/pages/Page404';

describe("Testando App", () => {

  it('Deverá exibir a página 404', () => {
    render(<Page404 />);

    expect(screen.getByText('404 Página não encontrada')).toBeInTheDocument();
  })
  
});