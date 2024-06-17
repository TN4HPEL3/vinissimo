import css from './TeamPageNameAtom.module.css';

function TeamPageNameAtom({ children }) {
  return <span className={css.team__content__name}>{children}</span>;
}

export { TeamPageNameAtom };
