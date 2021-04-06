import styles from './Items.module.scss';
import { API_ITEMS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';

const Items = () => {
  const [items, setItems] = useState([]);
  const getResurse = async (url) => {
    const data = await getDataApi(url);
    setItems(data);
  };

  useEffect(() => {
    getResurse(API_ITEMS);
  }, []);

  return (
    <React.Fragment>
      {items.length &&
        items.map(({ id, name, image_url }) => (
          <div className={styles.items_item} key={id}>
            {image_url ? <img src={`${image_url}`} alt={name} /> : 'NO IMG :('}
            <h1>{name.replace(/_/g, ' ').toUpperCase()}</h1>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Items;
