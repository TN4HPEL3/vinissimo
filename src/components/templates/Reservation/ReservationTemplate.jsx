import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { ReservationOrganism } from '../../organisms/ReservationOrganism/ReservationOrganism.jsx';

import css from './ReservationTemplate.module.css';
function ReservationTemplate() {
  const { t } = useLanguage();
  return (
    <div className={css.reservation} id="reservation">
      <h2 className={css.reservation__title}>{t.reservationTitle}</h2>
      <ReservationOrganism />
    </div>
  );
}

export { ReservationTemplate };
