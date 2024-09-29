// Filter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './Filter';
import '@testing-library/jest-dom';

describe('Filter', () => {
  const mockOnSearch = jest.fn();
  const mockOnFormatSelect = jest.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
    mockOnFormatSelect.mockClear();
  });

  it('renderiza SelectFormatAnime e SearchBar corretamente', () => {
    render(<Filter onSearch={mockOnSearch} onFormatSelect={mockOnFormatSelect} />);


    const formatos = ['All Formats', 'TV Show', 'Movie', 'TV Short', 'Special', 'OVA', 'ONA', 'Music'];
    formatos.forEach(formato => {
      const botao = screen.getByText(formato);
      expect(botao).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText('Digite algo aqui...');
    const button = screen.getByRole('button', { name: /buscar/i });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

});
