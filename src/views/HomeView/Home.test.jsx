// Home.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom';
import AnimeList from '../../components/ListAnime/List/AnimeList';
import Filter from '../../components/Search/Filter/Filter';

jest.mock('../../components/ListAnime/List/AnimeList', () => jest.fn(() => <div>Mock AnimeList</div>));
jest.mock('../../components/Search/Filter/Filter', () => jest.fn(({ onSearch, onFormatSelect }) => {
  return (
    <div>
      <input
        placeholder="Digite algo aqui..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={() => onFormatSelect('TV')}>Selecionar Formato</button>
    </div>
  );
}));

describe('Componente Home', () => {
  beforeEach(() => {
    AnimeList.mockClear();
    Filter.mockClear();
  });

  it('renderiza corretamente os componentes Filter e AnimeList', () => {
    render(<Home />);

    expect(screen.getByPlaceholderText('Digite algo aqui...')).toBeInTheDocument();
    expect(screen.getByText('Mock AnimeList')).toBeInTheDocument();
  });

  it('atualiza o texto de pesquisa ao chamar a função onSearch do componente Filter', () => {
    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText('Digite algo aqui...'), {
      target: { value: 'Naruto' },
    });

    expect(AnimeList).toHaveBeenCalledWith(
      expect.objectContaining({
        search: 'Naruto',
      }),
      expect.anything()
    );
  });

  it('atualiza o formato selecionado ao chamar a função onFormatSelect do componente Filter', () => {
    render(<Home />);

    fireEvent.click(screen.getByText('Selecionar Formato'));

    expect(AnimeList).toHaveBeenCalledWith(
      expect.objectContaining({
        format: 'TV',
      }),
      expect.anything()
    );
  });
});
