import css from './Button.module.css';

function Button({ text, icon, handleClick }) {
  return (
    <button type="button" onClick={handleClick} className={css.button}>
      {text} {icon}
      <div className={css.button__horizontal}></div>
      <div className={css.button__vertical}></div>
    </button>
  );
}

export { Button };
