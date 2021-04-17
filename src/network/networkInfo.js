export const getDataApiInfo = async (api) => {
  try {
    const res = await fetch(api);
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
