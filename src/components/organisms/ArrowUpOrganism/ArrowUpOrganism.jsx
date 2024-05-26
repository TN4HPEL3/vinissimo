import { smoothScrollToTop } from '../../../helpers/smoothScroll';
import { ArrowUpMolecule } from '../../molecules/ArrowUpMolecule/ArrowUpMolecule';

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
