import { SectionTemplate } from '../Section/SectionTemplate.jsx';
import { CheckMediaQuery } from '../../../helpers/checkMediaQuery.js';
import { useLanguage } from '../../../helpers/contexts/languageContext.js';
import { RateUsOrganism } from '../../organisms/RateUsOrganism/RateUsOrganism.jsx';

function RateUsTemplate() {
  const screen = CheckMediaQuery();
  const { t } = useLanguage();
  return (
    screen !== 'mobile' && (
      <SectionTemplate title={t.rateUsTitle}>
        <RateUsOrganism />
      </SectionTemplate>
    )
  );
}

export { RateUsTemplate };
