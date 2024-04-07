import { Link } from 'react-router-dom';
import css from './HeaderNavigation.module.css';

function HeaderNavigation() {
  return (
    <nav className={css.header__navigation}>
      <Link to="/">home</Link>
      <Link to="/menu">menu</Link>
      <Link to="/wine">wino</Link>
      <Link to="/events">eventy</Link>
      <Link to="/team">team</Link>
      <Link to="/reservation">rezerwacja</Link>
    </nav>
  );
}

export { HeaderNavigation };