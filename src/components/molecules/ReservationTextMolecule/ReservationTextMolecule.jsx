import { ParagraphAtom } from '../../atoms/ParagraphAtom/ParagraphAtom.jsx';
import { ReservationTextAtom } from '../../atoms/Reservation/ReservationTextAtom/ReservationTextAtom';

import css from './ReservationTextMolecule.module.css';

function ReservationTextMolecule() {
  return (
    <ParagraphAtom
      className={css.reservation__content__text}
      text={<ReservationTextAtom />}
    />
  );
}

export { ReservationTextMolecule };
