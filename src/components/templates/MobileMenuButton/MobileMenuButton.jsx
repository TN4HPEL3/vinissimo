import { Icon } from '../../atoms/Icon/Icon.jsx';

import css from './MobileMenuButton.module.css';

function MobileMenuButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <button className={css.mobileMenuButton} onClick={handleClick}>
      <Icon id="burger-menu" />
    </button>
  );
}

export { MobileMenuButton };