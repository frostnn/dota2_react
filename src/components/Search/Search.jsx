import styles from './Search.module.scss';

const Search = ({ setSearch }) => {
  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </>
  );
};

export default Search;
