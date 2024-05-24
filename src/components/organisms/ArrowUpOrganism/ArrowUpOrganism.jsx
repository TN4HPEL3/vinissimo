import { smoothScrollToTop } from '../../../helpers/smoothScroll';
import { ArrowUpMolecule } from '../../molecules/ArrowUpMolecule/ArrowUpMolecule';

import css from './ArrowUpOrganism.module.css';

function ArrowUpOrganism({ isVisible }) {
  const handleClick = () => smoothScrollToTop();
  return (
    <div
      className={
        !isVisible ? css['button__arrow--up--hidden'] : css['button__arrow--up']
      }
      onClick={handleClick}
    >
      <ArrowUpMolecule />
    </div>
  );
}

export { ArrowUpOrganism };
