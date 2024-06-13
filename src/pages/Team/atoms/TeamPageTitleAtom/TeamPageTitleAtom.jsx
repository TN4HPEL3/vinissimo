import css from './TeamPageTitleAtom.module.css';

function TeamPageTitleAtom({ children }) {
  return <h3 className={css.team__content__title}>{children}</h3>;
}

export { TeamPageTitleAtom };
