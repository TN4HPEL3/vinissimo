import { Icon } from '../../atoms/Icon/Icon.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';

import css from './Logo.module.css';

function Logo() {
  const screen = CheckMediaQuery();
  return (
    <>
      {screen === 'mobile' ? (
        <Icon id="logo-mobile" className={css.logo} />
      ) : (
        <Icon id="logo-desktop" className={css.logo} />
      )}
    </>
  );
}

export { Logo };