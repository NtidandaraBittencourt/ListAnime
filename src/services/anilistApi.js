import axios from 'axios';

const anilistApi = axios.create({
    baseURL: 'https://graphql.anilist.co',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  
  // Função para buscar animes com paginação
  export const fetchAnimes = async (search, page = 1, perPage = 5) => {
    const query = `
      query ($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (id: $id, search: $search) {
            id
            title {
              romaji
              english
            }
            genres
            averageScore
            coverImage {
              large
              medium
            }
            format
          }
        }
      }
    `;
  
    const variables = {
      search: search || "",  // Pesquisa ou busca geral
      page: page,
      perPage: perPage,
    };
  
    const response = await anilistApi.post('', {
      query: query,
      variables: variables,
    });
  
    return response.data.data.Page;
  };
  
  export default anilistApi;