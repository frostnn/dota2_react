import styles from './UiButton.module.scss';
import arrow from '../../../assets/img/arrow_left.png';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
const UiButton = ({ name = 'Back', direction = true }) => {
  const history = useHistory();
  return (
    <button
      className={
        direction ? classNames(styles.button_back_left) : classNames(styles.button_back_right)
      }
      onClick={() => history.goBack()}>
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
