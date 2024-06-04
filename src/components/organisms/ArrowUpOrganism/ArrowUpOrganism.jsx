import { forwardRef } from 'react';

import { smoothScrollToTop } from '../../../helpers/smoothScroll';
import { ArrowUpMolecule } from '../../molecules/ArrowUpMolecule/ArrowUpMolecule';

import css from './ArrowUpOrganism.module.css';

const ArrowUpOrganism = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={css['button__arrow--up']}
      onClick={() => smoothScrollToTop()}
    >
      <ArrowUpMolecule />
    </div>
  );
});

export { ArrowUpOrganism };
