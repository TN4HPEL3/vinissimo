import { CheckMediaQuery } from '../../../helpers/checkMediaQuery';
import { ContactLinkAtom } from '../../../pages/TestPage/atoms/ContactLinkAtom/ContactLinkAtom';
import { ParagraphAtom } from '../../atoms/ParagraphAtom';
import { ReservationMapAtom } from '../../atoms/Reservation/ReservationMapAtom';
import { ReservationTextAtom } from '../../atoms/Reservation/ReservationTextAtom';
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
            <ReservationMapAtom />
          </>
        )}
        <div>
          <ParagraphAtom text={<ReservationTextAtom />} />
          <button type="button">
            <ContactLinkAtom
              href="https://mojstolik.pl/restauracja/sztuczka-bistro-wino/c04bbd833ddf1bc466c75b19370dceaa/"
              text="rezerwacja"
            />
          </button>
        </div>
      </div>
    </SectionTemplate>
  );
}

export { ReservationTemplate };
