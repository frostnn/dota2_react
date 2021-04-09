import styles from './Items.module.scss';
import { API_ITEMS } from '../../constants/const';
import React, { useEffect, useState } from 'react';
import getDataApi from '../../network/network';
import { withErrorApi } from '../../hoc/withErrorApi';

const Items = ({ setErrorApi }) => {
  const [items, setItems] = useState([]);

  const getResurse = async (url) => {
    try {
      const data = await getDataApi(url);
      setItems(data);
      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
    }
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

export default withErrorApi(Items);
