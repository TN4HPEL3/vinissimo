import { TeamPageMolecule } from '../molecules/TeamPageMolecule.jsx';

import css from './TeamPageOrganism.module.css';

function TeamPageOrganism() {
  return (
    <div className={css.team}>
      <TeamPageMolecule />
    </div>
  );
}

export { TeamPageOrganism };
