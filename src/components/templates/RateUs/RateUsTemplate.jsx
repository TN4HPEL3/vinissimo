import { SectionTemplate } from '../Section/SectionTemplate.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { RateUsOrganism } from '../../organisms/RateUsOrganism/RateUsOrganism.jsx';

function RateUsTemplate() {
  const screen = CheckMediaQuery();
  return (
    screen !== 'mobile' && (
      <SectionTemplate title="oceń nas">
        <RateUsOrganism />
      </SectionTemplate>
    )
  );
}

export { RateUsTemplate };
