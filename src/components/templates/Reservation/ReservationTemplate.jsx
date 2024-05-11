import { hrefReservation } from '../../../helpers/findLink';
import { SectionTemplate } from '../Section/SectionTemplate';
import { ButtonAtom } from '../../atoms/buttonAtom/ButtonAtom';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom';
import { ReservationMapMolecule } from '../../molecules/ReservationMapMolecule/ReservationMapMolecule';
import { ReservationTextMolecule } from '../../molecules/ReservationTextMolecule/ReservationTextMolecule';

import css from './ReservationTemplate.module.css';

function ReservationTemplate() {
  return (
    <SectionTemplate
      title="rezerwacja"
      children={
        <div className={css.reservation}>
          <ReservationMapMolecule />
          <div className={css.reservation__content}>
            <ReservationTextMolecule />
            <ButtonAtom
              text={
                <ContactLinkAtom
                  href={hrefReservation}
                  children="zarezerwuj stolik"
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
