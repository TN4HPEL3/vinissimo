import css from './Button.module.css';

function Button({ text, icon, handleClick }) {
  return (
    <button type="button" onClick={handleClick} className={css.button}>
      {text} {icon}
    </button>
  );
}

export { Button };
