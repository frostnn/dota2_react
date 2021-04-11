import styles from './UiButton.module.scss';
import arrow from '../../../assets/img/arrow_left.png';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const UiButton = ({ name, direction = true, onClick }) => {
  return (
    <button
      className={
        direction ? classNames(styles.button_back_left) : classNames(styles.button_back_right)
      }
      onClick={onClick}>
      <span>{name}</span>
      <img src={arrow} alt="arrow" />
    </button>
  );
};
UiButton.propTypes = {
  name: PropTypes.string,
  direction: PropTypes.bool,
  onClick: PropTypes.func,
};
export default UiButton;
