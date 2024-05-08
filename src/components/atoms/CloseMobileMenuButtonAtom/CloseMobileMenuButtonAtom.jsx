import css from './CloseMobileMenuButtonAtom.module.css';

function CloseMobileMenuButtonAtom({ handleClick }) {
  return (
    <button className={[css['mobile-menu__button']]} onClick={handleClick}>
      x{/* <IconAtom id="close" /> */}
    </button>
  );
}

export { CloseMobileMenuButtonAtom };
