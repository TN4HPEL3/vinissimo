import css from './ValentinesTitleAtom.module.css';

function ValentinesTitleAtom({ text }) {
  return <h2 className={css.valentines__title}>{text}</h2>;
}

export { ValentinesTitleAtom };
