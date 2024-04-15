import css from './ButtonAtom.module.css';

function ButtonAtom({ text, icon, handleClick }) {
  return (
    <button type="button" onClick={handleClick} className={css.button}>
      {text} {icon}
      <div className={css.button__horizontal}></div>
      <div className={css.button__vertical}></div>
    </button>
  );
}

export { ButtonAtom };
