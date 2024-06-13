import { hrefEmail } from '../../../../helpers/findLink.js';
import { ContactLinkAtom } from '../../../../components/atoms/ContactLinkAtom/ContactLinkAtom.jsx';

import css from './EventsContactAtom.module.css';

function EventsContactAtom() {
  return (
    <>
      Przy większych rezerwacjach i zapytaniach o uroczystości zorganizowane lub
      cateringi, zapraszamy do kontaktu mailowego:
      <ContactLinkAtom className={css.events__content__link} href={hrefEmail}>
        booking@vinissimorestaurant.pl
      </ContactLinkAtom>
    </>
  );
}

export { EventsContactAtom };
