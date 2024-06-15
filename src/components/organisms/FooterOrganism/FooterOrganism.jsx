import {
  addressTextPL,
  nameTextPL,
  openingHoursSundayTextPL,
  openingHoursTextPL,
} from '../../../helpers/findTextByLanguage.js';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { FooterHoursMolecule } from '../../molecules/FooterHoursMolecule/FooterHoursMolecule.jsx';
import { FooterIconsMolecule } from '../../molecules/FooterIconsMolecule/FooterIconsMolecule.jsx';
import { FooterLinksMolecule } from '../../molecules/FooterLinksMolecule/FooterLinksMolecule.jsx';
import { FooterAddressMolecule } from '../../molecules/FooterAddressMolecule/FooterAddressMolecule.jsx';

import css from './FooterOrganism.module.css';

function FooterOrganism() {
  const screen = CheckMediaQuery();
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
        <FooterLinksMolecule />
        {screen === 'desktop' && <FooterIconsMolecule />}
      </div>
      {screen !== 'desktop' && <FooterIconsMolecule />}
    </>
  );
}

export { FooterOrganism };
