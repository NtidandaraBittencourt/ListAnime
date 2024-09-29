// FooterSearch.test.js
import { render, screen } from '@testing-library/react';
import FooterSearch from './FooterSearch';
import '@testing-library/jest-dom';

describe('FooterSearch', () => {
  it('renderiza a logo no footer certo', () => {
    render(<FooterSearch />);

    const logo = screen.getByAltText('Logo_Anime');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('test-file-stub'));
  });

  it('renderiza o texto certo', () => {
    render(<FooterSearch />);
    
    const footerText = screen.getByText(/todos os direitos reservados/i);
    expect(footerText).toBeInTheDocument();
  });
});
