// SelectFormatAnime.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import SelectFormatAnime from '../components/Search/SelectFormatAnime';
import '@testing-library/jest-dom';

describe('SelectFormatAnime', () => {
  const mockOnFormatSelect = jest.fn();

  it('renderiza todos os botões de formato corretamente', () => {
    render(<SelectFormatAnime onFormatSelect={mockOnFormatSelect} />);
    
    const formats = ['All Formats', 'TV Show', 'Movie', 'TV Short', 'Special', 'OVA', 'ONA', 'Music'];
    formats.forEach(format => {
      const button = screen.getByText(format);
      expect(button).toBeInTheDocument();
    });
  });

  it('chama onFormatSelect pra selecionar o formato', () => {
    render(<SelectFormatAnime onFormatSelect={mockOnFormatSelect} />);

    const tvShowButton = screen.getByText('TV Show');
    fireEvent.click(tvShowButton);

    expect(mockOnFormatSelect).toHaveBeenCalledWith('TV');
  });

  it('atualiza o estado do botão selecionado', () => {
    render(<SelectFormatAnime onFormatSelect={mockOnFormatSelect} />);

    const tvShowButton = screen.getByText('TV Show');
    fireEvent.click(tvShowButton);

    expect(tvShowButton).toHaveClass('MuiButton-contained'); 

    const allFormatsButton = screen.getByText('All Formats');
    expect(allFormatsButton).toHaveClass('MuiButton-outlined');
  });
});
