import { CheckMediaQuery } from '../../../helpers/checkMediaQuery';
import { SectionTemplate } from '../Section/SectionTemplate';

import css from './ReservationTemplate.module.css';

function ReservationTemplate() {
  const screen = CheckMediaQuery();
  return (
    <SectionTemplate title="rezerwacja">
      <div className={css.reservation}>
        {screen === 'mobile' ? (
          <>
            <p>Mobile</p>
          </>
        ) : (
          <>
            <p>Desktop</p>
          </>
        )}
      </div>
    </SectionTemplate>
  );
}

export { ReservationTemplate };
