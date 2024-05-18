import {
  addressTextPL,
  nameTextPL,
  openingHoursSundayTextPL,
  openingHoursTextPL,
  privacyPolicyTextPL,
} from '../../../helpers/findTextByLanguage';
import { FooterHoursMolecule } from '../../molecules/FooterHoursMolecule/FooterHoursMolecule';
import { FooterIconsMolecule } from '../../molecules/FooterIconsMolecule/FooterIconsMolecule';
import { FooterLinksMolecule } from '../../molecules/FooterLinksMolecule/FooterLinksMolecule';
import { FooterAddressMolecule } from '../../molecules/FooterAddressMolecule/FooterAddressMolecule';

import css from './FooterOrganism.module.css';

function FooterOrganism() {
  return (
    <>
      <div className={css.footer__links}>
        <FooterAddressMolecule
          textName={nameTextPL}
          textAddress={addressTextPL}
        />
        <FooterHoursMolecule
          textOpeningHours={openingHoursTextPL}
          textOpeningHoursSunday={openingHoursSundayTextPL}
        />
        <FooterLinksMolecule text={privacyPolicyTextPL} />
      </div>
      <FooterIconsMolecule />
    </>
  );
}

export { FooterOrganism };
