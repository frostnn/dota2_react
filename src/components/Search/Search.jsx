import { useState, useEffect } from 'react';
import styles from './Search.module.scss';
import getDataApi from '../../network/network';
const Search = () => {
  const [search, setSearch] = useState('');
  const [searchResponse, setSearchResponse] = useState([]);

  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setSearchResponse(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let API_LEAGUES_SEARCH = `/dota2/leagues?search=${search}&`;
    console.log(API_LEAGUES_SEARCH);
    getResurse(API_LEAGUES_SEARCH);
  }, [search]);

  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {searchResponse &&
        searchResponse.map(({ id, name, image_url }) => (
          <div className={styles.leagues_block_item} key={id}>
            <div className={styles.leagues_block_item_img}>
              {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            </div>
            <div className={styles.leagues_block_item_title}>
              {name.replace(/_/g, ' ').toUpperCase()}
            </div>
          </div>
        ))}
    </>
  );
};

export default Search;
