import { ValentinesCategoryMolecule } from '../molecules/ValentinesCategoryMolecule.jsx';

function ValentinesCategoryOrganism({ name, details }) {
  return (
    <div>
      <ValentinesCategoryMolecule name={name} details={details} />
    </div>
  );
}

export { ValentinesCategoryOrganism };
