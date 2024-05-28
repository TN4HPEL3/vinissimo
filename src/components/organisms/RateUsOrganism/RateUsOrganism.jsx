import { RateUsMolecule } from '../../molecules/RateUsMolecule/RateUsMolecule';

import css from './RateUsOrganism.module.css';

function RateUsOrganism() {
  return (
    <div className={css.rateUs__icons}>
      <RateUsMolecule />
    </div>
  );
}

export { RateUsOrganism };
