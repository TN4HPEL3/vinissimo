import { ParagraphAtom } from '../../atoms/ParagraphAtom';
import { SectionTemplate } from '../Section/SectionTemplate';
import { ReservationTextAtom } from '../../atoms/Reservation/ReservationTextAtom';
import { ContactLinkAtom } from '../../../pages/TestPage/atoms/ContactLinkAtom/ContactLinkAtom';

import css from './ReservationTemplate.module.css';
import { ButtonAtom } from '../../atoms/buttonAtom/ButtonAtom';
import { ReservationMapMolecule } from '../../molecules/ReservationMapMolecule/ReservationMapMolecule';

// To fix:
// 1. Href take from JSON
// 2. ContactLinkAtom  - styles from Test page to delete

function ReservationTemplate() {
  return (
    <SectionTemplate
      title="rezerwacja"
      children={
        <div className={css.reservation}>
          <ReservationMapMolecule />
          <div className={css.reservation__content}>
            <ParagraphAtom text={<ReservationTextAtom />} />
            <ButtonAtom
              text={
                <ContactLinkAtom
                  href="https://mojstolik.pl/restauracja/sztuczka-bistro-wino/c04bbd833ddf1bc466c75b19370dceaa/"
                  text="zarezerwuj stolik"
                />
              }
            />
          </div>
        </div>
      }
    ></SectionTemplate>
  );
}

export { ReservationTemplate };
