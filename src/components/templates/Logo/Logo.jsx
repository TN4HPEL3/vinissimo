import { Link } from 'react-router-dom';

import { Icon } from '../../atoms/Icon/Icon.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';

import css from './Logo.module.css';

function Logo() {
  const screen = CheckMediaQuery();
  return (
    <>
      <Link to="/" className={css.logo}>
        {screen === 'mobile' ? (
          <Icon id="logo-mobile" />
        ) : (
          <Icon id="logo-desktop" />
        )}
      </Link>
    </>
  );
}

export { Logo };
