import axios from 'axios';

export const getImages = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';

  const KEY = '29689520-f0c7787e64df676ce27bf4c34';

  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
