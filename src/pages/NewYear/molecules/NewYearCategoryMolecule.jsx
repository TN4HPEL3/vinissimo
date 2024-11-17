import { NewYearCategoryAtom } from '../atoms/NewYearCategoryAtom.jsx';
import { NewYearCategoryDetailsAtom } from '../atoms/NewYearCategoryDetailsAtom.jsx';

function NewYearCategoryMolecule({ name, details }) {
  return (
    <div>
      <NewYearCategoryAtom name={name} />
      <NewYearCategoryDetailsAtom details={details} />
    </div>
  );
}

export { NewYearCategoryMolecule };
