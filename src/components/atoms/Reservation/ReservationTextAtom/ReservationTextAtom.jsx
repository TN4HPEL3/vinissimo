import { hrefEmail } from '../../../../helpers/findLink.js';
import { ContactLinkAtom } from '../../ContactLinkAtom/ContactLinkAtom.jsx';
import { useLanguage } from '../../../../helpers/contexts/languageContext.js';

import css from './ReservationTextAtom.module.css';

function ReservationTextAtom() {
  const { t } = useLanguage();
  return (
    <>
      {t.reservationText}
      <ContactLinkAtom
        href={hrefEmail}
        className={[css['reservation__content__text__email']]}
      >
        booking@vinissimorestaurant.pl
      </ContactLinkAtom>
    </>
  );
}

export { ReservationTextAtom };
