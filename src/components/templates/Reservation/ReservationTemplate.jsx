import { SectionTemplate } from '../Section/SectionTemplate';

import { ReservationOrganism } from '../../organisms/ReservationOrganism/ReservationOrganism';

function ReservationTemplate() {
  return (
    <SectionTemplate title="rezerwacja" children={<ReservationOrganism />} />
  );
}

export { ReservationTemplate };
