// AnimeList.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AnimeList from './AnimeList';
import { useQuery } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import Loading from '../../../shared/Loading';
import AnimeCard from '../Card/AnimeCard';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));
  
describe('AnimeList', () => {
  const mockData = {
    media: [
      { id: 1, title: { romaji: 'Naruto' }, genres: ['Action', 'Adventure'], coverImage: { large: 'naruto.jpg' } },
      { id: 2, title: { romaji: 'One Piece' },genres: ['Action', 'Adventure'], coverImage: { large: 'onepiece.jpg' } },
    ],
  };

  const mockError = new Error('Nenhum anime encontrado.');

  const defaultProps = {
    search: '',
    page: '1',
    rowsPerPage: '12',
    format: '',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('exibe a tela de carregamento quando os dados estão sendo carregados', () => {
    useQuery.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
      refetch: jest.fn(),
    });
  
    const {container} = render(<Loading />);

    expect(container.querySelector('.loading-container')).toBeInTheDocument();
  });

  it('exibe um erro quando a requisição falha', () => {
    const mockError = { message: 'Nenhum anime encontrado' };
    useQuery.mockReturnValue({
      data: null,
      error: mockError,
      isLoading: false,
      refetch: jest.fn(),
    });

    render(<AnimeList {...defaultProps} />);

    expect(screen.getByText('Erro: Nenhum anime encontrado')).toBeInTheDocument();
  });

  it('renderiza os animes corretamente quando os dados são retornados', () => {
    useQuery.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
      refetch: jest.fn(),
    });

    render(<AnimeList {...defaultProps} />);

    expect(screen.getByText('Naruto')).toBeInTheDocument();
    expect(screen.getByText('One Piece')).toBeInTheDocument();
  });

  it('exibe a mensagem "Nenhum anime encontrado" quando a lista está vazia', () => {
    useQuery.mockReturnValue({
      data: { media: [] },
      error: null,
      isLoading: false,
      refetch: jest.fn(),
    });

    render(<AnimeList {...defaultProps} />);

    expect(screen.getByText('Nenhum anime encontrado.')).toBeInTheDocument();
  });

  it('carrega mais animes ao clicar no botão "Ver mais"', async () => {
    const refetchMock = jest.fn();
    useQuery.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
      refetch: refetchMock,
    });

    render(<AnimeCard {...defaultProps} />);

    const verMaisButton = screen.getByRole('button', { name: /ver mais/i });
    expect(verMaisButton).toBeInTheDocument();

    fireEvent.click(verMaisButton);

    await waitFor(() => expect(refetchMock).toHaveBeenCalledTimes(2));
  });
});
