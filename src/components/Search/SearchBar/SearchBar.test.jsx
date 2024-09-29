// SearchBar.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

describe('SearchBar', () => {
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  it('renderiza o campo de texto e o botão corretamente', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Digite algo aqui...');
    const button = screen.getByRole('button', { name: /buscar/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('chama a função onSearch ao clicar no botão', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Digite algo aqui...');
    const button = screen.getByRole('button', { name: /buscar/i });

    fireEvent.change(input, { target: { value: 'Anime' } });
    expect(input.value).toBe('Anime');

    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('Anime');
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  it('chama a função onSearch ao pressionar Enter', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Digite algo aqui...');

    fireEvent.change(input, { target: { value: 'Manga' } });
    expect(input.value).toBe('Manga');

    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(mockOnSearch).toHaveBeenCalledWith('Manga');
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  it('não chama a função onSearch se o campo estiver vazio', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const button = screen.getByRole('button', { name: /buscar/i });

    fireEvent.click(button);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
