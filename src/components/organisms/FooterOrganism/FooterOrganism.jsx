import { FooterHoursMolecule } from '../../molecules/FooterHoursMolecule/FooterHoursMolecule';
import { FooterIconsMolecule } from '../../molecules/FooterIconsMolecule/FooterIconsMolecule';
import { FooterLinksMolecule } from '../../molecules/FooterLinksMolecule/FooterLinksMolecule';
import { FooterAddressMolecule } from '../../molecules/FooterAddressMolecule/FooterAddressMolecule';

import css from './FooterOrganism.module.css';

function FooterOrganism() {
  return (
    <>
      <div className={css.footer__links}>
        <FooterAddressMolecule />
        <FooterHoursMolecule />
        <FooterLinksMolecule />
      </div>
      <FooterIconsMolecule />
    </>
  );
}

export { FooterOrganism };
