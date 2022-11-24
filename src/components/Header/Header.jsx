import styles from './Header.module.scss';

import Form from '../Form/Form';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Form />
      </div>
    </div>
  );
};

export default Header;
