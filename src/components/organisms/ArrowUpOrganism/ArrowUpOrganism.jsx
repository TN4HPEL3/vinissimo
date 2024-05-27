import { smoothScrollToTop } from '../../../helpers/smoothScroll.js';
import { ArrowUpMolecule } from '../../molecules/ArrowUpMolecule/ArrowUpMolecule.jsx';

import css from './ArrowUpOrganism.module.css';

function ArrowUpOrganism() {
  const handleClick = () => smoothScrollToTop();
  return (
    <div className={css['button__arrow--up']} onClick={handleClick}>
      <ArrowUpMolecule />
    </div>
  );
}

export { ArrowUpOrganism };
