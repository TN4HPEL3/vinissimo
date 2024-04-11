import { Logo } from '../Logo/Logo.jsx';

import css from './Header.module.css';
import { MobileMenuButton } from '../MobileMenuButton/MobileMenuButton.jsx';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation.jsx';

function Header() {
  return (
    <header className={css.header}>
      <div
        className={`${css.header__content} ${css['header__content--mobile']}`}
      >
        <Logo />
        <HeaderNavigation className={css.header__navigation} />
        <MobileMenuButton />
      </div>
    </header>
  );
}

export { Header };
