import axios from 'axios';

const anilistApi = axios.create({
    baseURL: 'https://graphql.anilist.co',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  
  export const fetchAnimes = async (search, page = 1, perPage = 12, format) => {
    const query = `
      query ($id: Int, $page: Int, $perPage: Int, $search: String, $format: MediaFormat) {
        Page (page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (id: $id, search: $search, format: $format) {
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
      page: page,
      perPage: perPage,
    };

    if (search) {
      variables.search = search;
    }
    
    if (format) {
      variables.format = format;
    }

  
    const response = await anilistApi.post('', {
      query: query,
      variables: variables,
    });
  
    return response.data.data.Page;
  };
  
  export default anilistApi;