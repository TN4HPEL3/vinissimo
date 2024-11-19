import { NewYearCategoryAtom } from '../../atoms/NewYearCategoryAtom/NewYearCategoryAtom.jsx';
import { NewYearCategoryDetailsAtom } from '../../atoms/NewYearCategoryDetailsAtom/NewYearCategoryDetailsAtom.jsx';

import css from './NewYearCategoryMolecule.module.css';

function NewYearCategoryMolecule({ name, details, category }) {
  return (
    <div className={css.newYear__list}>
      <NewYearCategoryAtom name={name} />
      <NewYearCategoryDetailsAtom details={details} category={category} />
    </div>
  );
}

export { NewYearCategoryMolecule };
