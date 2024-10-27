import { hrefEmail } from '../../../../helpers/findLink.js';
import { useLanguage } from '../../../../helpers/contexts/languageContext.js';
import { ContactLinkAtom } from '../../../../components/atoms/ContactLinkAtom/ContactLinkAtom.jsx';

import css from './EventsContactAtom.module.css';

function EventsContactAtom() {
  const { t } = useLanguage();
  return (
    <>
      {t.eventsPagePrimaryText}
      <ContactLinkAtom className={css.events__content__link} href={hrefEmail}>
        booking@vinissimorestaurant.pl
      </ContactLinkAtom>
    </>
  );
}

export { EventsContactAtom };
