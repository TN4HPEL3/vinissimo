import css from './Page404ImageAtom.module.css';

const publicAccess = name => process.env.PUBLIC_URL + '/images' + name;

function Page404ImageAtom() {
  return (
    <img
      className={css.page404ImageAtom}
      src={publicAccess('/Rabarbar.jpeg')}
      alt={'Bottle of the wine with glass'}
    ></img>
  );
}

export { Page404ImageAtom };
