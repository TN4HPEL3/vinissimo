import css from './TitleAtom.module.css';

function TitleAtom({ text }) {
  return <h1 className={css.TitleAtom}>{text}</h1>;
}

export { TitleAtom };
