import { Page404Molecule } from '../../molecules/Page404Molecule/Page404Molecule.jsx';

import css from './Page404Organism.module.css';

function Page404Organism() {
  return (
    <div className={css.page404Organism}>
      <Page404Molecule />
    </div>
  );
}

export { Page404Organism };
