import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { FooterHoursMolecule } from '../../molecules/FooterHoursMolecule/FooterHoursMolecule.jsx';
import { FooterIconsMolecule } from '../../molecules/FooterIconsMolecule/FooterIconsMolecule.jsx';
import { FooterLinksMolecule } from '../../molecules/FooterLinksMolecule/FooterLinksMolecule.jsx';
import { FooterAddressMolecule } from '../../molecules/FooterAddressMolecule/FooterAddressMolecule.jsx';
import { FooterHolidayHoursMolecule } from '../../molecules/FooterHolidayHoursMolecule/FooterHolidayHoursMolecule.jsx';

import css from './FooterOrganism.module.css';

function FooterOrganism() {
  const screen = CheckMediaQuery();
  const { t } = useLanguage();
  const {
    footerRestaurantName,
    footerAddress,
    footerOpeningHours,
    footerOpeningHoursSunday,
    holidayOpeningText,
    holidayOpeningHours,
  } = t;
  return (
    <>
      <div className={css.footer__links}>
        <FooterAddressMolecule
          textName={footerRestaurantName}
          textAddress={footerAddress}
        />
        <FooterHoursMolecule
          textOpeningHours={footerOpeningHours}
          textOpeningHoursSunday={footerOpeningHoursSunday}
        >
          <FooterHolidayHoursMolecule
            text={holidayOpeningText}
            hours={holidayOpeningHours}
          />
        </FooterHoursMolecule>

        <FooterLinksMolecule />
        {screen === 'desktop' && <FooterIconsMolecule />}
      </div>
      {screen !== 'desktop' && <FooterIconsMolecule />}
    </>
  );
}

export { FooterOrganism };
