import { ValentinesCategoryDetailsAtom } from '../atoms/ValentinesCategoryDetailsAtom/ValentinesCategoryDetailsAtom.jsx';
import { NewYearCategoryAtom } from '../../NewYear/atoms/NewYearCategoryAtom/NewYearCategoryAtom.jsx';

import css from './ValentinesCategoryMolecule.module.css';

function ValentinesCategoryMolecule({ name, details }) {
  return (
    <div>
      <NewYearCategoryAtom
        name={name}
        classNme={css.valentines__category__name}
      />
      <ValentinesCategoryDetailsAtom details={details} />
    </div>
  );
}

export { ValentinesCategoryMolecule };
