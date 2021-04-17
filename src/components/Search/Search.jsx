import styles from './Search.module.scss';
import SearchIcon from '@material-ui/icons/Search';
const Search = ({ setSearch }) => {
  return (
    <div className={styles.search_panel}>
      <SearchIcon />
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Search;
