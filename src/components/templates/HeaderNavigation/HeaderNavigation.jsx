import { Link } from 'react-router-dom';

function HeaderNavigation({ className }) {
  return (
    <nav className={className}>
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
