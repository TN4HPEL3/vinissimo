import { smoothScrollToTop } from '../../helpers/smoothScroll';

function MenuPage({ children }) {
  smoothScrollToTop();
  return <>{children}</>;
}

export { MenuPage };
