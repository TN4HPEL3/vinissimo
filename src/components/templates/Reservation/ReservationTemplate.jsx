import { ReservationOrganism } from '../../organisms/ReservationOrganism/ReservationOrganism.jsx';

import css from './ReservationTemplate.module.css';
function ReservationTemplate() {
  return (
    <div className={css.reservation} id="reservation">
      <h2 className={css.reservation__title}>rezerwacja</h2>
      <ReservationOrganism />
    </div>
  );
}

export { ReservationTemplate };
