import css from './ButtonAtom.module.css';

function ButtonAtom({ text, handleClick }) {
  return (
    <button type="button" onClick={handleClick} className={css.button}>
      {text}
      <div className={css.button__horizontal}></div>
      <div className={css.button__vertical}></div>
    </button>
  );
}

export { ButtonAtom };
