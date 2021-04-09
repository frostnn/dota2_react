import React, { useState } from 'react';
import Error from '../components/Error/Loader';

export const withErrorApi = (View) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false);
    return (
      <React.Fragment>
        {errorApi ? <Error /> : <View setErrorApi={setErrorApi} {...props} />}
      </React.Fragment>
    );
  };
};
