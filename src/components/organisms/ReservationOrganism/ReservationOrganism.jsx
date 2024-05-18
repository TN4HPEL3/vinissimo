import { hrefReservation } from '../../../helpers/findLink';
import { ButtonAtom } from '../../atoms/buttonAtom/ButtonAtom';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom';
import { ReservationMapMolecule } from '../../molecules/ReservationMapMolecule/ReservationMapMolecule';
import { ReservationTextMolecule } from '../../molecules/ReservationTextMolecule/ReservationTextMolecule';

import css from './ReservationOrganism.module.css';

function ReservationOrganism() {
  return (
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
  );
}

export { ReservationOrganism };
