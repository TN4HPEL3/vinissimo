import { SectionTemplate } from '../Section/SectionTemplate';

import { ReservationOrganism } from '../../organisms/ReservationOrganism/ReservationOrganism';

import css from './ReservationTemplate.module.css';
function ReservationTemplate() {
  return (
    <div className={css.reservation} id="reservation">
      <h2 className={css.reservation__title}>rezerwacja</h2>
      <ReservationOrganism />
    </div>
    // <SectionTemplate title="rezerwacja" children={} />
  );
}

export { ReservationTemplate };
