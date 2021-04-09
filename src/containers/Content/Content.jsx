import Wrapper from '../Wrapper';
import styles from './Content.module.scss';

const Content = ({ children }) => {
  return (
    <section className={styles.content}>
      <Wrapper>{children}</Wrapper>
    </section>
  );
};

export default Content;
