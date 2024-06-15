import { hrefReservation } from '../../../helpers/findLink.js';
import { ButtonAtom } from '../../atoms/buttonAtom/ButtonAtom.jsx';
import { ContactLinkAtom } from '../../atoms/ContactLinkAtom/ContactLinkAtom.jsx';
import { ReservationMapMolecule } from '../../molecules/ReservationMapMolecule/ReservationMapMolecule.jsx';
import { ReservationTextMolecule } from '../../molecules/ReservationTextMolecule/ReservationTextMolecule.jsx';

import css from './ReservationOrganism.module.css';

function ReservationOrganism() {
  return (
    <div className={css.reservation}>
      <ReservationMapMolecule />
      <div className={css.reservation__content}>
        <ReservationTextMolecule />
        <ContactLinkAtom
          href={hrefReservation}
          children={<ButtonAtom text="zarezerwuj stolik" />}
        />
      </div>
    </div>
  );
}

export { ReservationOrganism };
