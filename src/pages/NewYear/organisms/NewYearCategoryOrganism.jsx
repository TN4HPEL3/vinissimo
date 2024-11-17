import { NewYearCategoryMolecule } from '../molecules/NewYearCategoryMolecule.jsx';

function NewYearCategoryOrganism({ name, details }) {
  return (
    <div>
      <NewYearCategoryMolecule name={name} details={details} />
    </div>
  );
}

export { NewYearCategoryOrganism };
