import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { ReservationMapAtom } from '../../atoms/Reservation/ReservationMapAtom/ReservationMapAtom.jsx';

import css from './ReservationMapMolecule.module.css';

function ReservationMapMolecule() {
  const screen = CheckMediaQuery();
  return (
    screen !== 'mobile' && (
      <div className={css.reservation__map}>
        <ReservationMapAtom />
      </div>
    )
  );
}

export { ReservationMapMolecule };
