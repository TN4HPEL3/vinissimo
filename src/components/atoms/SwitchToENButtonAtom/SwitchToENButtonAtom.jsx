import css from './SwitchToENButtonAtom.module.css';

function SwitchToENButtonAtom() {
  const handleClick = () => {
    console.log('Switch to english');
  };
  return (
    <button type="button" onClick={handleClick} className={css.button}>
      EN
    </button>
  );
}

export { SwitchToENButtonAtom };
