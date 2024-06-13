import { hrefEmail } from '../../../../helpers/findLink.js';
import { ContactLinkAtom } from '../../ContactLinkAtom/ContactLinkAtom.jsx';

import css from './ReservationTextAtom.module.css';

function ReservationTextAtom() {
  return (
    <>
      Rezerwacji indywidualnej (do 12 osób), możecie dokonać poprzez poniższy
      link, każdorazowo, jako potwierdzenie otrzymacie sms ze szczegółami
      rezerwacji. Przy większych rezerwacjach i zapytaniach o uroczystości
      zorganizowane lub cateringi, zapraszamy do kontaktu mailowego:
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
