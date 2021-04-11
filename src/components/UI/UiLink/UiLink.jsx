import styles from './UiLink.module.scss';
import PropTypes from 'prop-types';
import arrow from '../../../assets/img/arrow_left.png';
import classNames from 'classnames';
const UiLink = ({ url, name, direction = true }) => {
  return (
    <a
      href={url}
      className={direction ? classNames(styles.link_site_left) : classNames(styles.link_site_right)}
      rel="noreferrer"
      target="_blank">
      {name}
      <img src={arrow} alt="arrow" />
    </a>
  );
};
UiLink.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  direction: PropTypes.bool,
};
export default UiLink;
