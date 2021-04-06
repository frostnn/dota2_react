import { API_TOKEN, API_URL } from '../constants/const';

const getDataApi = async (api) => {
  try {
    const res = await fetch(`${API_URL}${api}${API_TOKEN}`);
    if (!res.ok) {
      console.error(`Could not fetch. Status - ${res.status}`);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error(`Could not fetch. ${error.message}`);
    return false;
  }
};

export default getDataApi;
