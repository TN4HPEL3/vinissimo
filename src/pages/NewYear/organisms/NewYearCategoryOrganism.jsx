import { NewYearCategoryMolecule } from '../molecules/NewYearCategoryMolecule/NewYearCategoryMolecule.jsx';

function NewYearCategoryOrganism({ name, details, category }) {
  return (
    <div>
      <NewYearCategoryMolecule
        name={name}
        details={details}
        category={category}
      />
    </div>
  );
}

export { NewYearCategoryOrganism };
